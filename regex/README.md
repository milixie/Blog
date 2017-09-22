## regex

####正则表达式基本的字符意义：

```
* \b 代表开头或结尾  /\bhi\b/.test('hi look'): true  /\bhi\b/.test('history')：false
* .  代表除了换行符以外的任意字符
* *  代表任意次数，相当于{0,}
* \d 代表数字
* ? :表示重复一次或0次,相当于{0,1}
* *|{n,m}|+|?  后面跟上一个?表示非贪婪模式下的匹配
* {n} ：表示连续重复出现n次
* {n,}  :表示连续重复出现n 次或更多
* {n,m} :表示连续重复出现 n~m次
* \s :代表任意空白符，包括空格、换行符\n、制表符\t
* \w ：代表字母或数字或下划线
* ^  :匹配开头
* $  :匹配结尾
* +  ：表达式至少出现一次，相当于{1,}
* \1, \2, \3 ...: 反向引用
* \S :代表除了任意空白符（空格、换行符\n、制表符\t）的字符
* \D：代表除了数字以外的字符
* \W ：代表除了字母或数字或下划线以外的字符
* \B  ：代表除了开头或结尾
* [^] :表示除了 xx 以外

```

#### 一些案例与讲解
```

//匹配座机号 010-80008123 或者 010 80008123 或者 01080008123 或者 0349-8000812 或者 03498000812 或者 0349 8000812

const regex1 = new RegExp(/(^0\d{2}[- ]?\d{8}$)|(^0\d{3}[- ]?\d{7}$)/);
regex1.test('010-80808080');
regex1.test('01080808080');
regex1.test('010 80808080');
regex1.test('0349 0808080');
regex1.test('03490808080');
regex1.test('0349-0808080');

//匹配一个小于某个数字的数字，比如 361
const regex2 = new RegExp(/^[0-2]?\d?\d$|^3[0-5]\d$|^36[0-1]]/);
regex2.test('361');  //true
regex2.test('359');  //true
regex2.test('399');  //false

//匹配一个 ip，0.0.0.0 - 255.255.255.255
/*
  先匹配小于255的数
 */
const regex3 = new RegExp(/^[0-1]?\d?\d$|^2[0-4]\d$|^25[0-5]$/);
regex3.test(255);  //true
regex3.test(249);  //true
regex3.test(0);  //true
regex3.test(256);  //false

const regex4 = new RegExp(/^((([01]?\d?\d|2[0-4]\d|25[0-5])\.){3}([01]?\d?\d|2[0-4]\d|25[0-5]))$/);

regex4.test('0.0.0.0');  //true
regex4.test('255.255.255.255');  //true
regex4.test('255.255.255.256');  //false



//匹配一个叠词，比如 go go 或 35 35
const regex5 = new RegExp(/\b(\w+)\b\s+\1/);
regex5.test('go go');  //true
regex5.test('go');  //false
regex5.test('35 35 3');  //true


/*
 贪婪模式
  例如: 匹配 googooog
  以下两种都是贪婪模式，本身第一个匹配一个 o 就可以了，但是他会尽可能的多匹配
  第二个匹配 oo 就可以了，但是他会尽可能的多匹配
 */

/(g)(\w+)/.test('googooog');   //匹配成功，\w+ 匹配的是 oogooog
/(g)(\w+)(g)/.test('googooog');   //匹配成功，\w+ 匹配的是 oogooo

/*
  非贪婪模式
    例如：匹配 googooog
 */

/(g)(\w+?)/.test('googooog');  //匹配成功， \w+ 匹配的是 o
/(g)(\w+?)(g)/.test('googooog');  //匹配成功， \w+ 匹配的是 oo

/*
 贪婪模式 vs 非贪婪模式
 在表示重复次数的特殊字符后面加上一个 ? 即可以表示非贪婪模式，
 也就是这些特殊字符：
 {m,n}
 {n,}
 *,
 +,
 ?
 */

/*
  反向引用  \1 \2 \3
  就是对括号里面内容的一种重复
  \1 表示跟第一对括号匹配
  \2 表示跟第2对括号匹配,
  括号的顺序就是 ( 的顺序
 */


const regex6 = new RegExp(/<(\w+)\s*(\w+(=('|").*?\4)?\s*)*>.*?<\/\1>/);

regex6.test("<td id='mili' style='bgcolor: white'></td>");  //true

/*
  说明：
  1.最后面的 \1 其实就是第一个括号里面的 \w+
  2.中间的 \4 其实就是第四个括号里面的 '|"
 */

/*
  预搜索：匹配 ?= 不匹配 ?!
 */



//匹配一个数，整数或者小数  123.2  23.  123  .5
const regex7 = new RegExp(/^(\d+\.?\d*|\.\d+)$/);
regex7.test('123.5');  //true
regex7.test('123.');  //true
regex7.test('123');  //true
regex7.test('.5');  //true

regex7.test('m1.5w');  //false


/*
  中国大陆手机号：
  0 | 86 | 17951 开头，可存在可不存在
  13、17、18 开头后面的1个数字均0-9
  14开头后面的1个数字是 5 或者 7
  15开头后面的1个数字是 0-3 或 5-9
 */

const regex8 = new RegExp(/^(0|86|17951)?(13[0-9]|15[0-35-9]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/g);
regex8.test('18621436564');

/*
  邮箱
  xie_mei-li.hcy.yhc@qq.xie_mi-li.love.com
 */

const regex9 = new RegExp(/^[\w-]+(?:\.[\w-]+)*@((?:[\w-]+\.)*\w[\w-]{0,66}\.[a-z]{2,6}(?:\.[a-z]{2})?)$/i);
regex9.test('xie_mei-li.hcy.yhc@qq.xie_mi-li.love.com');  //true


/*
  方法：
  regex.test(str)
  regex.exec(str)
  str.match(regex)
  str.search(regex)
  str.replace(a, b)
  str.split('')
  注意：exec 和 match 的写法不一样，其次如果有 /g， match 会返回所有匹配的数组，但是不会返回子匹配
 */

const regex10 = new RegExp(/(f)(\w+\s)+(g)/);
const str = 'feel good';

regex10.test(str);
regex10.exec(str);
str.match(regex10);
str.search(regex10);
str.replace('ee', 'ul');
str.split(' ');

```
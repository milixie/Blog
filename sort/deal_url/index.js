const url = 'http://www.baidu.com?name=mili&age=15&love=hcy#meal';
const url2 = 'http://www.baidu.com';
const url3 = 'test';
/*
*
* 获取 url 的 search 部分name=mili&age=15&love=hcy，并且以对象的形式展示出来
* {
*   name: 'mili',
*   age: 15,
*   love: 'hcy'
* }
*/

function getSearchObject(url) {
  const deal_url = url || window.location.href;
  const deal = deal_url.split('?');
  const domain = deal[0];
  let right;
  let search = '';
  let search_obj = {};
  let hash = '';
  if (deal && deal.length > 1) {
    right = deal[1];
    search = right.split('#')[0];
    hash = right.split('#')[1];
    const splits = search.split('&');
    if (splits && splits.length) {
      splits.forEach(item => {
        const sub = item.split('=');
        if (sub && sub.length > 1) {
          search_obj[sub[0]] = sub[1];
        }
      });
    }
  }
  return {
    domain,
    search,
    search_obj,
    hash
  };
}

const result = getSearchObject(url);
const result2 = getSearchObject(url2);
const result3 = getSearchObject(url3);

console.log(result.search_obj, result2.search_obj, result3.search_obj);

//{name: "mili", age: "15", love: "hcy"} {} {}

/* 去除一个搜索条件
 *  url 的 search 部分name=mili&age=15&love=hcy
 *  处理成age=15&love=hcy
 *  最后的 url 为http://www.baidu.com?age=15&love=hcy#meal';
*/

function deleteSearchKey(key, url) {
  const deal_url = url || window.location.url;
  const deal = getSearchObject(url);
  let new_url = url;
  if (deal && deal.search_obj && deal.search_obj[key]) {
    delete deal.search_obj[key];
    const domain = deal && deal.domain;
    const arr_keys = Object.keys(deal.search_obj);
    let search = '';
    arr_keys.forEach((k, i) => {
      const v = deal.search_obj[k];
      if (i === arr_keys.length - 1) {
        search += `${k}=${v}`;
      } else {
        search += `${k}=${v}&`;
      }
    });
    new_url = `${domain}?${search}`;
    if (deal && deal.hash) {
      new_url += `#${deal.hash}`;
    }
  }
  return new_url;
}

const result4 = deleteSearchKey('name', url);
console.log(result4);
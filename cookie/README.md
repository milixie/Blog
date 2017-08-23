### cookie

```
/**
 * 读取 cookie、设置 cookie 的封装
 * 删除 cookie 的封装
 * */
export function cookie(key, value, options) {
  let minutes;
  let time;
  let result;
  let decode;

  if (arguments.length > 1 && String(value) !== '[object Object]') {
    if (value === null || value === undefined) {
      options.expires = -1;
    }

    if (typeof options.expires === 'number') {
      minutes = (options.expires * 60 * 1000);
      time = options.expires = new Date();

      time.setTime(time.getTime() + minutes);
    }

    value = String(value);

    return (document.cookie = [
      encodeURIComponent(key), '=',
      options.raw ? value : encodeURIComponent(value),
      options.expires ? `; expires=${options.expires.toUTCString()}` : '',
      options.path ? `; path=${options.path}` : '',
      options.domain ? `; domain=${options.domain}` : '',
      options.secure ? '; secure' : ''
    ].join(''));
  }

  options = value || {};
  decode = options.raw ? s => s : decodeURIComponent;

  return (result = new RegExp(`(?:^|; )${encodeURIComponent(key)}=([^;]*)`).exec(document.cookie)) ? decode(result[1]) : null;
}


export function deleteCookie(key, value, options) {
  const exp = new Date();
  exp.setTime(exp.getTime() - (24 * 60 * 60 * 1000));
  document.cookie = `${key}=${value};expires=${exp.toGMTString()};path=${options.path};`;
}



```
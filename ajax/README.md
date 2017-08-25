## ajax

### 创建 ajax 的过程

>- 创建 XMLHttpRequest 对象

>- 发起请求，建立好请求地址，参数以及请求头

>- 服务器请求响应

>- 处理响应结果

### 封装一个 ajax

```

    function ajax(options) {
      options = options || {};
      const type = (options.type || 'GET').toLowerCase();
      const url = options.url;
      const data_type = options.dataType || 'json';
      const params = options.params || {};
      let xhr = new XMLHttpRequest();
      //做兼容
      if (!window.XMLHttpRequest) {  //<=ie6
        xhr = new ActiveXObject('Micorosoft.XMLHTTP');
      }

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status >= 200 && xhr.status <= 300) {
            options.success && options.success(xhr.responseText, xhr.responseXML);
          } else {
            options.fail && options.fail(xhr.status);
          }
        }
      };
      xhr.open(type, url);
      xhr.send();

      if (type === 'GET') {
        xhr.open('GET', `${options.url}?${params}`, true);
        xhr.send();
      } else if (type === 'POST') {
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(params);
      }
    }

    document.getElementById('btn').onclick = function () {
      ajax({
        type: 'GET',
        url: './test.json',
        dataType: 'json',
        params: {},
        success: function (data, xml) {
          document.getElementById('returnText').innerHTML = data;
        },
        fail: function (err) {
          alert('请求失败了！！！', err);
        }
      })
    };
```
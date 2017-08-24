## webSocket

### 简介

webSocket 是一种网络协议，最大的特点是，服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话

#### 其他特点：

> - 建立在 TCP 协议之上，服务器端的实现比较容易

> - 与 HTTP 协议有着良好的兼容性，握手阶段采用 http 协议

> - 数据格式比较轻量，性能开销小，通信高效

> - 可以发送文本，也可以发送二进制数据

> - 没有同源限制，客户端可以和服务器任意通信

> - 协议标识符 `ws`, 加密后 `wss`

### 使用

先执行`npm i ws`安装 webSocket

在服务端文件中：

```
const WebSocket = require('ws');

const ws = new WebSocket('wss://echo.websocket.org');

ws.onopen = (evt) => {
  console.log('connection open ...');
  ws.send('Hello webSocket');  //向服务器发送数据
};

ws.onmessage = (evt) => {
  console.log('Received message:' + evt.data);
  ws.close();
};

ws.onclose = (evt) => {
  console.log('connection closed');
};

ws.onerror = (evt) => {
  console.log('error' , evt);
};

```

执行你的服务端代码文件，你会看到服务端会打印：


```
Server is running in http://localhost:8080/
Express server listening on 8080
connection open ...
Received message:Hello webSocket
connection closed

```

如果想指定多个回调

```
ws.addEventListener('open', function(event) {
  //回调
  console.log(event, 'add open');
});

ws.addEventListener('message', function(event) {
  //回调
  console.log('add message');
});

ws.addEventListener('close', function(event) {
  //回调
  console.log('add close');
});

ws.addEventListener('error', function(event) {
  //回调
  console.log('error');
});

```

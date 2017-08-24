const WebSocket = require('ws');

const ws = new WebSocket('wss://echo.websocket.org');

ws.onopen = (evt) => {
  console.log('connection open ...');
  ws.send('Hello webSocket');
};

ws.onmessage = (evt) => {
  console.log('Received message:' + evt.data);
  ws.close();
};

ws.onclose = (evt) => {
  console.log('connection closed');
};

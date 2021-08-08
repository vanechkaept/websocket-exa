let socket = new WebSocket(
  'wss://javascript.info/article/websocket/demo/hello'
);

console.log(socket);

socket.onopen = function(e) {
  console.log('[open] Соединение установлено');
  console.log('Отправляем данные на сервер');
  socket.send('Bubble');
};

socket.onmessage = function(event) {
  console.log(`[message] Данные получены с сервера: ${event.data}`);
};

socket.onclose = function(error) {
  console.log(error);
};

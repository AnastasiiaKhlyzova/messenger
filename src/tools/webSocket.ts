export default class MyWebSocket {
  socket;

  constructor(url) {
    this.socket = new WebSocket(url);
    this.socket.addEventListener('open', () => {
      console.log('Соединение установлено');

      this.socket.send(JSON.stringify({
        content: 'Моё первое сообщение миру!',
        type: 'message',
      }));
    });

    this.socket.addEventListener('close', (event) => {
      if (event.wasClean) {
        console.log('Соединение закрыто чисто');
      } else {
        console.log('Обрыв соединения');
      }

      console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    });

    this.socket.addEventListener('message', (event) => {
      console.log('Получены данные', event.data);
    });

    this.socket.addEventListener('error', (event) => {
      console.log('Ошибка', event.message);
    });
  }

  sendMessage(message) {
    this.socket.send(JSON.stringify({
      content: message,
      type: 'message',
    }));
  }
}

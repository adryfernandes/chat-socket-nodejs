import { Server, Socket } from 'socket.io';

export default class ChatEvents {
  constructor(private socket: Socket, private io: Server) {
    this.registerEvents();
  }

  private registerEvents() {
    this.socket.on('chat message', this.handleMessage);
  }

  private handleMessage = (message: string) => {
    const messageWithSender = {
      senderId: this.socket.id,
      text: message,
    };

    this.io.emit('chat message', messageWithSender);
  };
}

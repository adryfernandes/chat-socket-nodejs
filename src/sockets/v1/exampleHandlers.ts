import { Socket } from 'socket.io';

export const registerExampleHandlers = (socket: Socket) => {
  socket.on('getData', () => {
    const data = { message: 'Dados do Socket.io' };
    socket.emit('data', data);
  });
};

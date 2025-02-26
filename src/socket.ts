import { Server } from 'socket.io';
import http from 'http';
import { CORS_ORIGIN } from './config/config';

export const initSocket = (server: http.Server) => {
  const io = new Server(server, {
    cors: {
      origin: CORS_ORIGIN,
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log('Novo cliente conectado:', socket.id);

    socket.on('message', (data: unknown) => {
      console.log('Mensagem recebida:', data);
      io.emit('message', data);
    });

    socket.on('disconnect', () => {
      console.log('Cliente desconectado:', socket.id);
    });
  });

  return io;
};

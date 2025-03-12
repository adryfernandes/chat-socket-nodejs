/* eslint-disable no-console */
import http from 'http';
import { CORS_ORIGIN, PORT } from './config/config';
import express from 'express';
import { Server } from 'socket.io';
import ChatEvents from './events/chatEvent';

const startServer = () => {
  try {
    const app = express();
    const server = http.createServer(app);

    const io = new Server(server, {
      cors: {
        origin: CORS_ORIGIN,
        methods: ['GET', 'POST'],
      },
    });

    io.on('connection', (socket) => {
      console.log('Conectado:', socket.id);

      new ChatEvents(socket, io);

      socket.on('disconnect', () => {
        console.log('Desconectado:', socket.id);
      });
    });

    server.listen(PORT, () => {
      console.log(`Servidor iniciado na porta ${PORT}`);
    });
  } catch (error) {
    console.error('[Erro ao iniciar servidor]:', error);
    process.exit(1);
  }
};

startServer();

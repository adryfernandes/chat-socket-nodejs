import { Server } from 'socket.io';
import http from 'http';
import { registerV1Handlers } from './v1';
import { CORS_ORIGIN } from '@/config/config';

export const initSocket = (server: http.Server) => {
  const io = new Server(server, {
    cors: {
      origin: CORS_ORIGIN,
      methods: ['GET', 'POST'],
    },
  });

  const v1Namespace = io.of('/api/v1');
  registerV1Handlers(v1Namespace);

  return io;
};

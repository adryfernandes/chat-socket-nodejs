import { Namespace } from 'socket.io';
import { registerExampleHandlers } from './exampleHandlers';

export const registerV1Handlers = (namespace: Namespace) => {
  namespace.on('connection', (socket) => {
    // eslint-disable-next-line no-console
    console.log('Novo cliente conectado na versão 1:', socket.id);
    registerExampleHandlers(socket);
  });
};

import http from 'http';
import { createApp } from './app';
import { initSocket } from './socket';
import { PORT } from './config/config';

const startServer = () => {
  try {
    const app = createApp();
    const server = http.createServer(app);

    initSocket(server);

    server.setTimeout(10000, () => {
      console.warn('[Timeout]: Conexão encerrada por inatividade.');
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

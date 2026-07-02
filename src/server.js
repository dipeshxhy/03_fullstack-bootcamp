import 'dotenv/config';

import http from 'http';
import logger from '../logger.js';
import app from './app.js';
import connectDB from './db/index.js';

const server = http.createServer(app);

const port = process.env.PORT || 8000;
server.listen(port, async () => {
  await connectDB();
  logger.info(`Server is running on port http://localhost:${port} in ${process.env.NODE_ENV} mode`);
});

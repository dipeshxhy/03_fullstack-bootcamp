import express from 'express';
import cors from 'cors';

import logger from '../logger.js';
import morgan from 'morgan';
import { ApiError } from './utils/api-error.js';
import { errorHandler } from './middlewares/error-handler.js';
import userRouter from './router/user.router.js';

const morganFormat = ':method :url :status :response-time ms';

const app = express();
app.use(express.urlencoded({ extended: true, limit: '20kb' }));
app.use(express.json({ limit: '20kb' }));
// cors setup
app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'X-Requested-With',
      'Accept',
      'Origin',
      'Access-Control-Allow-Origin',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  }),
);

// logger setup
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(' ')[0],
          url: message.split(' ')[1],
          status: message.split(' ')[2],
          responseTime: message.split(' ')[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  }),
);

app.get('/healthcheck', (req, res) => {
  res.status(200).json({ message: 'Server is up ' });
});

// routes
app.use('/users', userRouter);

app.all('/api/{*splat}', (req, res) => {
  throw ApiError.notFound(`Can't find ${req.originalUrl} on this server!`);
});

app.use(errorHandler);

export default app;

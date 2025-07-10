import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
// import dotenv from 'dotenv';
import { getEnvVar } from './utils/getEnvVar.js';

// const PORT = 3000;
// const PORT = Number(process.env.PORT);
const PORT = Number(getEnvVar('PORT', '3000'));

// dotenv.config();

export const startServer = () => {
  const app = express();

  app.use(express.json());

  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello World!',
    });
  });

  //   app.get('/', (req, res) => {
  //     res.status(404).json({
  //       message: 'Not found',
  //     });
  //   });

  app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
  });

  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  });

  //   app.use((err, req, res, next) => {
  //     res.status(500).json({
  //       message: 'Something went wrong',
  //       error: err.message,
  //     });
  //   });

  app.listen(PORT, () => {
    console.log(`Serveris running on port ${PORT}`);
  });
};

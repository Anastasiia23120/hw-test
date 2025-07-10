// import express from 'express';

// const PORT = 3000;

// const app = express();

// * 2 ----------------------

// app.use((req, res, next) => {
//   console.log(`Time: ${new Date().toLocaleString()}`);
//   next();
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// * 3 Використання middleware

// app.use((req, res, next) => {
//   console.log(`Time ${new Date().toLocaleString()}`);
//   next();
// });

// app.use(express.json());

// app.get('/', (req, res) => {
//   res.json({
//     message: 'Hello, World!',
//   });
// });

// app.use((err, req, res, next) => {
//   res.status(500).json({
//     message: 'Something went wrong',
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// * 4 Кастомні middleware (1)

// app.use('*', (req, res, next) => {
//   res.status(404).json({
//     message: 'Route not found',
//   });
// });

// * 5 Кастомні middleware (2)

// import express from 'express';

// const PORT = 3000;

// const app = express();

// app.use(express.json());

// app.get('/', (req, res) => {
//   res.json({
//     message: 'Hello World!',
//   });
// });

// app.use('*', (req, res, next) => {
//   res.status(404).json({
//     message: 'Not found',
//   });
// });

// app.use((err, req, res, next) => {
//   res.status(500).json({
//     message: 'Something went wrong',
//     error: err.message,
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// * 6 Middleware із бібліотек
// import pino from 'pino-http';
// import express from 'express';
// import cors from 'cors';

// const PORT = 3000;

// const app = express();

// app.use(
//   pino({
//     transport: {
//       target: 'pino-pretty',
//     },
//   }),
// );

// app.use(express.json());

// app.use(cors());

// app.get('/', (req, res) => {
//   res.json({
//     message: 'Hello World!',
//   });
// });

// // app.use('*', (req, res) => {
// //   res.status(404).json({
// //     message: 'Not found',
// //   });
// // });

// app.use((req, res) => {
//   res.status(404).json({
//     message: 'Not found',
//   });
// });

// app.use((err, req, res, next) => {
//   res.status(500).json({
//     message: 'Something went wrong',
//     error: err.message,
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// * 7 Файлова структура застосунку

import { startServer } from './server.js';

startServer();

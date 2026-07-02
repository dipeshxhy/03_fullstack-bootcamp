import express from 'express';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/healthcheck', (req, res) => {
  res.status(200).json({ message: 'Server is healthy' });
});

export default app;

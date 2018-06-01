import express from 'express';
import places from './routes/places';

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});

app.use('/api/places', places);

export default app;

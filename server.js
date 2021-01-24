import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routers/productRouter.js';
import breakdownRouter from './routers/breakdownRouter.js';

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost/wine_search-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use('/api/products', productRouter);
app.use('/api/breakdown', breakdownRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
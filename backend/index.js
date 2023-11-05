import express from "express";
import { PORT, MONGODB_URL} from "./config.js";
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
// import cors from 'cors';


const app = express();

// app.use(cors());
app.use(express.json());

// A welcome get request
app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome to the server');
});

app.use('/books', booksRoute);

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log('Connected to Mongo')
    app.listen(PORT, () => {
    console.log(`ruuning on port :${PORT}`)
});
  })
  .catch((error) => {
    console.log(error);
  })

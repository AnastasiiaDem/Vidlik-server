const apiRoutes = require('./routes/router');
require('dotenv').config();
const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.json());

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = process.env.PORT;
const { MONGODB_LINK } = process.env;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  // res.setHeader('Access-Control-Allow-Origin', 'https://vidlik.vercel.app');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

mongoose
  .connect(MONGODB_LINK, {
    useNewUrlParser: true,
  })
  .catch((err) => console.log(err));

mongoose.connection.on('connected', () => console.log('Connected to db'));

app.listen(PORT, () => {
  console.log(`Server is working on ${PORT} port`);
});

app.use('/api/', apiRoutes);

module.exports = app;

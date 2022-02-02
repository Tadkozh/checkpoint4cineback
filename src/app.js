require('dotenv').config();
const express = require('express');
const moviesRouter = require('./routes/movies');
// const authorsRouter = require('./routes/authors');
const connection = require('./db-config');

const app = express();

app.use(express.json());
app.use('/api/movies', moviesRouter);
// app.use('/api/authors', authorsRouter);

connection.query('SELECT * FROM movies', (err, results) => {
  console.log(err, results);
});

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
  } else {
    console.log(`connected to database with threadId :  ${connection.threadId}`);
  }
});

module.exports = app;
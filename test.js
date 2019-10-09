//contain express app
/*
This Express app contains four pieces of middleware:

        *the first logs "Request received" to the console, and hands on execution

        *the second adds a 201 status code to the response, and hands on execution

        *the third sends the JSON response, and hands on execution

        *the final piece of middleware logs "Response sent successfully" to the console
*/
const express = require('express');

const test = express();

test.use((req, res, next) => {
  console.log('Request received!');
  next();
});

test.use((req, res, next) => {
  res.status(201);
  next();
});

test.use((req, res, next) => {
  res.json({ message: 'Your request was successful!' });
  next();
});

test.use((req, res, next) => {
  console.log('Response sent successfully!');
});

module.exports = test;
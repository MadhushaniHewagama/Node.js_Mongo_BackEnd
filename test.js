//contain express app
/*
This Express app contains four pieces of middleware:

        *the first logs "Request received" to the console, and hands on execution

        *the second adds a 201 status code to the response, and hands on execution

        *the third sends the JSON response, and hands on execution

        *the final piece of middleware logs "Response sent successfully" to the console
*/
/*
  Middleware functions can perform the following tasks:

  Execute any code.
  Make changes to the request and the response objects.
  End the request-response cycle.
  Call the next middleware in the stack
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
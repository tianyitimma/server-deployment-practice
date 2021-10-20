'use strict';

const express = require('express');
const app = express();

const person = require('./routes/person.js');
//const talk = require('./routes/talk.js');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator.js');
const handle404 = require('./error-handlers/404.js');
const handle500 = require('./error-handlers/500');


app.use(express.json());
app.use(logger);
app.use(handle404);
app.use(handle500);

//app.post('/talk', talk);
app.get('/person?name=tim', validator, person);





const PORT = process.env.PORT || 3000;

module.exports = {
  app,
  start: app.listen(PORT, () => console.log('Server is up ', PORT)),
};
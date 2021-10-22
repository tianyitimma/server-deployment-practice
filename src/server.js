'use strict';

const express = require('express');
const app = express();

const clothesRouter = require('./routes/clothes');
const foodRouter = require('./routes/food');
//const person = require('./routes/person.js');
//const talk = require('./routes/talk.js');
// const logger = require('./middleware/logger');
// const validator = require('./middleware/validator.js');
// const handle404 = require('./error-handlers/404.js');
// const handle500 = require('./error-handlers/500');


app.use(express.json());
// app.use(logger);

//app.post('/talk', talk);
// app.get('/person', validator, (req, res) =>{
//   res.status(200);
//   res.send({ name: req.query.name});
// });

// app.use(handle500);
// app.use(handle404);

// app.get('/clothes');
// app.get('/clothes');
// app.post('/clothes');
// app.put('/clothes');
// app.delete('/clothes');
app.use('/clothes', clothesRouter);

// app.get('/food');
// app.get('/food');
// app.post('/food');
// app.put('/food');
// app.delete('/food');

app.use('/food', foodRouter);


//const PORT = process.env.PORT || 3000;

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log('Server is up ', port));
  },
};
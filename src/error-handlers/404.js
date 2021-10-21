'use strict';

module.exports = function(err, req, res, next) {
  console.log('******************');
  console.log(err);
  if(err === '404/Not-Found'){
    res.status(404);
    res.end();
  } else {
    next(err);
  }
};
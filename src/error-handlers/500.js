'use strict';

module.exports = function(err, req, res, next) {
  console.log('=========================');
  console.log(err);
  if(err === '500/No-Name'){
    
    res.status(500);
    res.end();
  } else {
    next(err);
  }
};
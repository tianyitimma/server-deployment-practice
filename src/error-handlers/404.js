'use strict';

module.exports = function(err, req, res) {

  if(err === '404/Not-Found'){
    res.status(404);
    res.end();
  }
};
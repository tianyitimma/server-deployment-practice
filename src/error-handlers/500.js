'use strict';

module.exports = function(err, req, res) {

  if(err === '500/No-Name'){
    res.status(500);
    res.end();
  }
};
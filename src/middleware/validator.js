'use strict';

module.exports = function (req, res, next) {
  
  const name = req.param;
  
  if (!req.query.exists()) {
    next('500/No-Name');
  } else {
    res.json({'name': name});
    next();
  }

};
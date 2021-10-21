'use strict';

module.exports = function (req, res, next) {
  
  const name = req.query.name;
  //console.log(JSON.stringify(req));
  
  console.log(req.query);
  if (name) {
    next();
  } else {

    next('500/No-Name');
  }

};
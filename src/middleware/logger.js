'use strict';


module.exports = function (req, res, next) {

  console.log(req.method);
  console.log(req.path);

  let method = req.method;
  let path = req.path;

  if (method === 'POST' || method === 'GET') {
    if (path === '/' || path === '/person' || path === '/talk') {
      next();
    } else {
      next('404/Not-Found');
    }
  } else {
    next('404/Not-Found');
  }

};
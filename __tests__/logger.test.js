'use strict';

const logger = require('../src/middleware/logger.js');
//const error = require('../src/error-handlers/404.js');

describe('Testing the Logging middleware', () => {
  
  let req = {method: 'GET'};
  let res = {};
  let next = jest.fn();
  console.log = jest.fn();

  it('should be able to log a method', () => {

    logger(req, res, next);

    expect(console.log).toHaveBeenCalledWith('GET');
    expect(next).toHaveBeenCalled();
  });

  it('should throw an error when a method other than GET or POST is called', () => {
    req.method = 'DELETE';

    logger(req, res, next);
    expect(next).toHaveBeenCalledWith('404/Not-Found');
    //expect(res.status).toBe(error);
  });

});
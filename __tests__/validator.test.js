'use strict';

const validator = require('../src/middleware/validator.js');

describe('Testing the validator middleware', () => {

  let req = {query: {}};
  let res = {status: jest.fn()};
  let next = jest.fn();
  //console.log = jest.fn();
  
  it('should throw an error if there is no name property', () => {

    req.query.name = undefined;
    validator(req, res, next);
    
    expect(next).toHaveBeenCalledWith('500/No-Name');
    //expect(res.status).toBe(500);
  });
});
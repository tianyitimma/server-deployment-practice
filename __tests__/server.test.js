'use strict';

const server = require('../src/server.js');
const supertest = require('supertest');

const request = supertest(server.app);

describe('Testing routes', () => {

  it('Should throw an error when using a bad route', async () => {
    
    const response = await request.get('/wrongRoute');

    expect(response.status).toBe(404);
  });

  it('Should throw an error when using a method other than GET and POST', async () => {
    
    const response = await request.delete('/person?name=fred');

    expect(response.status).toBe(404);
  });

  it('Should throw an error when without using a name', async () => {
    
    const response = await request.get('/person');

    expect(response.status).toBe(500);
  });

  it('Should get code 200 for passing', async () => {
    const response = await request.get('/person?name=fred');

    expect(response.status).toBe(200);
    console.log(JSON.stringify(response));
    //expect(typeof response.text).toBe('string');
    expect(JSON.parse(response.text).name).toBe('fred');
  });
});
'use strict';
const request = require('supertest');

describe('loading express', () => {
  let server;
  beforeEach(() => {
    server = require('../server');
  });
  afterEach(() => {
    server.close();
  });
  it('responds to \'/\'', () => {
    request(server)
      .get('/', (res) => { console.log(res); })
      .expect(200, done);
  });
});
'use strict';
const request = require('supertest');

describe('loading express', () => {
  // let server, app;
  beforeEach(() => {
    server = require('./server-factory')();
    // app = require('./server').app;
    console.log('server', server);
    server();
  });
  afterEach((done) => {
    // console.log('app', app);
    // app.close(done);
    done;
  });
  it('responds to \'/\'', () => {
    request(server)
      .get('/', (res) => { console.log(res); })
      .expect(200);
  });
});

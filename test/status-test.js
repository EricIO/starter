"use strict";

const request = require('supertest');

const app = require('../app');

Feature('_status', () => {
  When('Requesting /_status the app responds with a 200 OK', (done) => {
    request(app)
      .get('/_status')
      .expect(200)
      .end(done);
  });
});

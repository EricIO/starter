"use strict";

const request = require('supertest');
const should = require('chai').should();

const app = require('../app');

Feature('_status', () => {
  let response;

  When('Requesting /_status the app responds with a 200 OK', (done) => {
    request(app)
      .get('/_status')
      .expect(200)
      .end((err, res) => {
        response = res.text;
        done();
      });
  });

  And('Result is OK', () => {
    response.should.eql(JSON.stringify({ status : 'OK'}));
  });
});

"use strict";

const path = require('path');

module.exports = (app) => {
  app.get('/_status', (req, res) => {
    res.json({ status : 'OK' });
  });

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/../index.html'));
  });
};

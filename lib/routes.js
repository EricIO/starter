"use strict";

module.exports = (app) => {
  app.get('/_status', (req, res) => {
    res.json({ status : 'OK' });
  });

  app.get('/', (req, res) => {
    res.send('Yes');
  });
};

"use strict";

const express = require('express');
const routes = require('./lib/routes.js');

const setup = () => {
  const app = express();
  routes(app);

  return app;
};

const app = setup();

if (require.main === module) {
  const port = Number(process.env.PORT || 3000);
  app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
  });
}

module.exports = app;

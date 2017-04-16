"use strict";

const path = require('path');
const fs   = require('fs');
const { createBundleRenderer } = require('vue-server-renderer');

const bundleRenderer = createBundleRenderer(
  require('../dist/vue-ssr-bundle.json'),
  {
    template : fs.readFileSync('./index.html', 'utf-8')
  }
);

module.exports = (app) => {
  app.get('/_status', (req, res) => {
    res.json({ status : 'OK' });
  });

  app.get('*', (req, res) => {
    bundleRenderer.renderToStream({url : req.path})
      .pipe(res);
  });
};

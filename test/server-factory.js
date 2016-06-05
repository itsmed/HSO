function makeServer() {

  'use strict';
  /*
  This is a node server using expressjs. If unfamailar with aspects of node servers, please checkout the docs at https://nodejs.org/en/docs/
  */

  const express = require('express');
  const path = require('path');
  // webpack will serve from the development server unless proxied, hence using http-proxy
  const httpProxy = require('http-proxy');
  // Webpack requires the path to our index.html file to be clearly given. index.html is located in the public folder of our root directory.
  const publicPath = path.resolve(__dirname, 'public');

  // If we are in production mode then webpack will serve from port 3500, otherwise it will find the port to serve from via the hosting environment 
  const isProduction = process.env.NODE_ENV === 'production';
  const port = isProduction ? process.env.PORT : 3500;
  // We need to add a configuration to our proxy server, as we are going to proxy outside of localhost
  const proxy = httpProxy.createProxyServer({
    changeOrigin: true
  });

  // create our express application
  const app = express();

  // serving the index.html
  app.use(express.static(publicPath));

  // if not in production, this proxies requests to localhost:3000 and sendt them to our webpack server at localhost:8080
  if (!isProduction) {
    const bundle = require('./server/compiler.js');
    bundle();
  // app.all is a special routing method used for loading middleware functions
    app.all('/build/*', (req, res) => {
    // check the request
      console.log('request body', req.body);
      proxy.web(req, res, {
        target: 'http://localhost:8080'
      });
    });
  }
  proxy.on('error', (e) => {
    console.warn('Could not connect to proxy, please try again. Error: %s', e);
  });

  // spin up the server
  app.listen(port, () => {
    console.log('Server running on port %s', port);
  });

  // catch all other GET requests, such as when refreshing
  app.get('*', (req, res) => {
    res.sendFile(publicPath + '/index.html');
  });

  return server;

}

module.exports = makeServer;
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const responseTime = require('response-time');
const logger = require('morgan');
const busy = require('node-toobusy');
// const pool = require('./db');
const {
  server: {
    PORT,
  },
} = require('./config');

const server = express();
server.use(require('express-status-monitor')({
  title: 'Pern App Status',
  path: '/status',
  spans: [{
    interval: 1,
    retention: 60,
  }, {
    interval: 10,
    retention: 60,
  }, {
    interval: 30,
    retention: 60,
  }, {
    interval: 60,
    retention: 60,
  }],
  chartVisibility: {
    cpu: true,
    mem: true,
    load: true,
    responseTime: true,
    rps: true,
    statusCodes: true,
  },
  healthChecks: [{
    protocol: 'http',
    host: 'localhost',
    path: '/',
    port: PORT.toString(),
  }],
}));

server.use(cors());
server.use(((req, res, next) => {
  if (busy()) {
    res.status(503).send({
      error: true,
      statusMessages: [
        'Server is too busy to accept any new requests',
      ],
    });
  } else {
    next();
  }
}));
server.use(responseTime());
server.use(helmet());
server.use(compression());
server.use(express.json());
server.use(logger('dev'));

require('./routes')({
  server,
});

server.listen(PORT, () => {
  console.info(`The server is up and running on ${PORT}`);
});

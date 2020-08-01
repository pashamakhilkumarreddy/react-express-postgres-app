const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const responseTime = require('response-time');
// const pool = require('./db');
const {
  server: {
    PORT,
  },
} = require('./config');

const server = express();
server.use(cors());
server.use(responseTime());
server.use(helmet());
server.use(compression());
server.use(express.json());

require('./routes')({ server });

server.listen(PORT, () => {
  console.info(`The server is up and running on ${PORT}`);
});

const express = require('express');
const server = express();
const cors = require('cors');
const pool = require('./db');
const config = require('./config');

const PORT = parseInt(config.server.port) || 5000;

server.use(cors());
server.use(express.json());

require('./routes')(server);

server.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`)
})
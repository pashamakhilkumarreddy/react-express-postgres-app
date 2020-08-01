const {
  Pool,
} = require('pg');

const {
  db: {
    postgres: {
      DB_USER,
      DB_PASS,
      DB_NAME,
      DB_PORT,
      options: {
        host: DB_HOST,
      },
    },
  },
} = require('./config');

const pool = new Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASS,
  port: DB_PORT,
});

module.exports = pool;

require('dotenv').config();

module.exports = {
  server: {
    port: process.env.PORT,
  },
  db: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    options: {
      dialect: process.env.DB_DIALECT || 'postgres',
      host: process.env.DB_HOST || 'localhost',
    },
  },
};

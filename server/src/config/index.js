require('dotenv').config();

module.exports = {
  server: {
    PORT: process.env.PORT || 4000,
  },
  db: {
    postgres: {
      DB_PORT: process.env.DB_PORT || 5432,
      DB_NAME: process.env.DB_NAME || 'perntodo',
      DB_USER: process.env.DB_USER || 'johndoe',
      DB_PASS: process.env.DB_PASSWORD || 'stark',
      options: {
        dialect: process.env.DB_DIALECT || 'postgres',
        host: process.env.DB_HOST || 'localhost',
      },
    },
  },
};

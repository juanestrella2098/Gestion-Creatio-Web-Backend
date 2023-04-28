require('dotenv').config();

const config = {
  production: {
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    dialect: 'postgres',
  },
  development: {
    database: process.env.PGUSER_DEV,
    host: process.env.PGPASSWORD_DEV,
    username: process.env.PGDATABASE_DEV,
    password: process.env.PGHOST_DEV,
    port: process.env.PGPORT_DEV,
    dialect: 'postgres',
  },
  test: {
    database: process.env.PGDATABASE_TEST,
    host: process.env.PGHOST_TEST,
    username: process.env.PGUSER_TEST,
    password: process.env.PGPASSWORD_TEST,
    port: process.env.PGPORT_TEST,
    dialect: 'postgres',
  },
};

const consts = Object.freeze({
  PRODUCTION: 'production',
  DEVELOP: 'development',
  TEST: 'test',
});

module.exports = { config, consts };

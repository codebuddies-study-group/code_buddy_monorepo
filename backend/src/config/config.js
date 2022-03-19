/**
 * File containing configurations to our database. Used make to migrations too
 */

require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.POSTGRESS_USERNAME,
    "password": process.env.POSTGRESS_PASSWORD,
    "database": process.env.POSTGRESS_DATABASE,
    "host": "127.0.0.1",
    "port": 5438,
    "dialect": "postgres",
  },
  "test": {
    "username": process.env.POSTGRESS_USERNAME,
    "password": process.env.POSTGRESS_PASSWORD,
    "database": process.env.POSTGRESS_DATABASE,
    "host": "127.0.0.1",
    "port": 5438,
    "dialect": "postgres",
  },
  "production": {
    "username": process.env.POSTGRESS_USERNAME,
    "password": process.env.POSTGRESS_PASSWORD,
    "database": process.env.POSTGRESS_DATABASE,
    "host": "127.0.0.1",
    "port": 5438,
    "dialect": "postgres",
  }
}

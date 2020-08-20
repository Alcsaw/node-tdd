// docker run --name postgres -e POSTGRES_USER=docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 postgres
require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

/**
 * This database configuration file changes its settings based
 * on the .env file. NODE_ENV=test sets the environment to testing,
 * so a different database is used, thus not interfering with
 * real user data in the actual application database.
 *
 * - timestamps flag set to true will automatically fill the `created_at`
 * and `updated_at` fields for table rows;
 * - `undescored` is meant for the table names to be in snake_case;
 * - and `underscoredAll` applies snake_case for columns as well.
 */

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: 'postgres',
  operatorsAliases: 0,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

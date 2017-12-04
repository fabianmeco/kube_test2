/**
 * Created by garusis on 4/12/17.
 */
module.exports = {
  client: 'pg',
  connection: 'your_pg_url_connection_url',
  searchPath: 'public',
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: `${__dirname}/db/migrations`
  },
  seeds: {
    directory: `${__dirname}/db/seeds`
  }
};
/**
 * Created by garusis on 4/12/17.
 */
module.exports = {
  client: 'pg',
  connection: 'postgres://gbdjzqmr:V4nFgdodE-HeObt6jCsPt9j4z_Wht1Na@baasu.db.elephantsql.com:5432/gbdjzqmr',
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
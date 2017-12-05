module.exports = require('knex')({
    client: 'pg',
    connection: 'postgres://gbdjzqmr:V4nFgdodE-HeObt6jCsPt9j4z_Wht1Na@baasu.db.elephantsql.com:5432/gbdjzqmr',
    searchPath: 'public',
    pool: {min:0, max:5}
  });
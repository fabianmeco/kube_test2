
exports.up = function(knex, Promise) {
  return knex.schema.createTable('assistants', function(assist){
    assist.increments('id').primary();
    assist.string('name').notNull();
    assist.string('cid').notNull();
    assist.string('photo').nullable();
    assist.string('email').notNull();
    assist.text('address').notNull();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('assistants');
};

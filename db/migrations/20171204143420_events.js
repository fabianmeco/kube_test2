
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', function(event){
    event.increments('id').primary();
    event.string('name').notNull();
    event.enum('city', ['Cucuta', 'Bucaramanga', 'Bogota', 'Cali', 'Medellin']).notNull();
    event.dateTime('date').notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events');
};


exports.up = function(knex, Promise) {
  return knex.schema.createTable('tickets', function(ticket){
      ticket.increments('id').primary();
      ticket.integer('event_id').notNull();
      ticket.foreign('event_id').references('events.id');
      ticket.integer('assistant_id').notNull();
      ticket.foreign('assistant_id').references('assistants.id');
      ticket.string('seat').notNull();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tickets');
};

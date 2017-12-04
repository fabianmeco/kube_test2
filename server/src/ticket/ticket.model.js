const knex = require('../helper/knex');
const Ticket = {};

Ticket.create = function(ticket){
    return knex('assistants').insert(ticket);
}

Ticket.findAll = function(query){
    return knex.select('*').from('assistants').where(query);
}

Ticket.find= function(query){
    return Ticket.findAll(query).first();
}

Ticket.update = function(query, body){
    return knex('assistants').where(query).update(body).first();    
}

Ticket.delete = function(queryid){
    return knex('assistants').where(queryid).del();
}

module.exports = Ticket;
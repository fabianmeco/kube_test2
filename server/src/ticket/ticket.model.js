const knex = require('../helper/knex');
const Ticket = {};

Ticket.create = function(ticket){
    return knex('tickets').insert(ticket);
}

Ticket.findAll = function(query){
    return knex.select('*').from('tickets').where(query);
}

Ticket.find= function(query){
    return Ticket.findAll(query).first();
}

Ticket.findSameDate = function(id_assistant, date){
    return knex('tickets').join('events','tickets.event_id','=','events.id').select('*')
    .where('tickets.assistant_id',id_assistant).andWhere('events.date', date);
}

Ticket.update = function(query, body){
    return knex('tickets').where(query).update(body).first();    
}

Ticket.delete = function(queryid){
    return knex('tickets').where(queryid).del();
}

module.exports = Ticket;
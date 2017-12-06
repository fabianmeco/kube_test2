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

Ticket.findSameDateUpdate = function(id_assistant, date, id_event){
    return knex('tickets').join('events','tickets.event_id','=','events.id').select('*')
    .where('tickets.assistant_id',id_assistant).andWhere('events.date', date).andWhereNot({'tickets.id': id_event});
}

Ticket.update = function(query, body){
    return knex('tickets').where(query).update(body);    
}

Ticket.delete = function(queryid){
    return knex('tickets').where(queryid).del();
}

Ticket.deleteAll = function(){
    return knex('tickets').del();
}

module.exports = Ticket;
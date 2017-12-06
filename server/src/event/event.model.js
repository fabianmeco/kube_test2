const knex = require('../helper/knex');
const Event = {};

Event.create = function(event){
    return knex('events').returning('name').insert(event);
}

Event.findAll = function(query){
    return knex.select('*').from('events').where(query);
}

Event.findLike = function(query){
    return knex.select('*').from('events').whereRaw(`LOWER(name) LIKE ?`, [`%${query}%`]).orWhereRaw(`LOWER(city) LIKE ?`, [`%${query}%`])
}

Event.find= function(query){
    return Event.findAll(query).first();
}

Event.update = function(query, body){
    return knex('events').where(query).update(body);    
}

Event.delete = function(queryid){
    return knex('events').where(queryid).del();
}

Event.deleteAll = function(){
    return knex('events').del();
}

module.exports = Event;
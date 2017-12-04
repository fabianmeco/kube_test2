const knex = require('../helper/knex');
const Event = {};

Event.create = function(event){
    return knex('events').insert(event);
}

Event.findAll = function(query){
    return knex.select('*').from('events').where(query);
}

Event.findLike = function(query){
    return knex.select('*').from('events').where('name', 'like', '%'+query+'%').orWhere('city', 'like', '%'+query+'%')
}

Event.find= function(query){
    return Event.findAll(query).first();
}

Event.update = function(query, body){
    return knex('events').where(query).update(body).first();    
}

Event.delete = function(queryid){
    return knex('events').where(queryid).del();
}

module.exports = Event;
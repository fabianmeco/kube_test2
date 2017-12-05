const knex = require('../helper/knex');
const Assistant = {};

Assistant.create = function(assistant){
    return knex('assistants').insert(assistant);
}

Assistant.findAll = function(query){
    return knex.select('*').from('assistants').where(query);
}

Assistant.findLike = function(query){
    return knex.select('*').from('assistants').whereRaw(`LOWER(name) LIKE ?`, [`%${query}%`]).orWhereRaw(`LOWER(email) LIKE ?`, [`%${query}%`]).orWhereRaw(`LOWER(cid) LIKE ? `, [`%${query}%`])
}

Assistant.find = function(query){
    return Assistant.findAll(query).first();
}

Assistant.update = function(query, body){
    return knex('assistants').where(query).update(body).first();    
}

Assistant.delete = function(queryid){
    return knex('assistants').where(queryid).del();
}

Assistant.deleteAll = function(){
    return knex('assistants').del();
}

module.exports = Assistant;
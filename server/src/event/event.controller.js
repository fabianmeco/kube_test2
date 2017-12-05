"use strict"

const joi = require('joi');
const eventModel = require('./event.model');

const schema = joi.object().keys({
    name: joi.string().required(),
    date: joi.date().required(),
    city: joi.string().required()

})

exports.post = function(req, res){

}

exports.get = function(req, res){
    return eventModel.findLike(req.query.request)
    .then(values => res.json(values))
    .catch(err => res.status(500).send({ "name": "error", "message": err.message }));
}

exports.getOneMiddleware = function(req, res, next){
    return eventModel.find({id:req.params.id}).then(function (event) {
        if (event) {
            req.event = event;
            return next();
        }
        return res.sendStatus(404);
    }).catch(err => res.status(500).send({ "name": "error", "message": err.message }));
}

exports.getOne = function(req, res){
    
}

exports.put = function(req, res){

}

exports.delete = function(req, res){
    
}
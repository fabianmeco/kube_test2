"use strict"

const joi = require('joi');
const assistantModel = require('./assistant.model');

const schema = joi.object().keys({
    name: joi.string().required(),
    email: joi.string().email().required(),
    cid: joi.string().required(),
    photo: joi.string(),
    address: joi.string().required()

})

exports.post = function(req, res){
    return joi.validate(req.body, schema)
    .then(function(){
        return assistantModel.find({cid: req.body.cid})
        .then(function(found){
            if (found) {
                return res.status(422).send({ "name": "cid", "message": "Cid already registered" });
             }
             return assistantModel.create(req.body)
             .then(newTeacher => res.json(newTeacher))         
        })
    }).catch(err=> res.status(500).send({"name":"error", "message": err.message}));
}

exports.get = function(req, res){
    return assistantModel.findLike(req.query)
    .then(values => res.json(values))
    .catch(err => res.status(500).send({ "name": "error", "message": err.message }));
}

exports.getOneMiddleware = function(req, res, next){
    return assistantModel.find({id:req.params.id}).then(function (assist) {
        if (assist) {
            req.assistant = assist;
            return next();
        }
        return res.sendStatus(404);
    }).catch(err => res.status(500).send({ "name": "error", "message": err.message }));
}

exports.getOne = function(req, res){
    res.json(req.assistant);
}

exports.put = function(req, res){

}

exports.delete = function(req, res){
     return assistantModel.delete(req.assistant.id)
    .then(assistant => res.json({"name":"removed", "message":"Assistant removed"}))
    .catch(err => res.status(500).send({ "name": "error", "message": err.message }));
}
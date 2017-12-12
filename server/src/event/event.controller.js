"use strict"

const joi = require('joi');
const moment = require('moment');
const eventModel = require('./event.model');

const schema = joi.object().keys({
    name: joi.string().required(),
    date: joi.date().min(moment().format()).required(),
    city: joi.string().required()

})
const schema_update = joi.object().keys({
    name: joi.string(),
    date: joi.date().min(moment().format()),
    city: joi.string()

})

exports.post = function (req, res) {
    return joi.validate(req.body, schema, { allowUnknown: true, abortEarly: false })
        .then(function () {
            return eventModel.create(req.body)
                .then(newEvent => res.json(newEvent));
        }).catch(err => {
            if (err.isJoi) {
                return res.status(422).send(err.details.map(function(error){
                    return { name: error.context.key, message: error.message}})
                );
            }
            return res.status(500).send([{ name: "error", message: err.message }])
        })
}

exports.get = function (req, res) {
    if (req.query.request) {
        return eventModel.findLike(req.query.request)
            .then(values => res.json(values))
            .catch(err => res.status(500).send([{ "name": "error", "message": err.message }]));
    }
    return eventModel.findAll({})
    .then(values => res.json(values))
    .catch(err => res.status(500).send([{ "name": "error", "message": err.message }]));
}

exports.getOneMiddleware = function (req, res, next) {
    return eventModel.find({ id: req.params.id }).then(function (event) {
        if (event) {
            req.event = event;
            return next();
        }
        return res.sendStatus(404);
    }).catch(err => res.status(500).send([{ "name": "error", "message": err.message }]));
}

exports.getOne = function (req, res) {
    return res.json(req.event);
}

exports.put = function (req, res) {
    return joi.validate(req.body, schema_update, { allowUnknown: true, abortEarly:false })
        .then(function () {
            return eventModel.update({ id: req.event.id }, req.body)
                .then(newEvent => res.json(newEvent));
        }).catch(err => {
            if (err.isJoi) {
                return res.status(422).send(err.details.map(function(error){
                    return { name: error.context.key, message: error.message}})
                );
            }
            return res.status(500).send([{ name: "error", message: err.message }])
        })
}

exports.delete = function (req, res) {
    return eventModel.delete({ id: req.event.id })
        .then(event => {
            res.json([{ "name": "removed", "message": "Assistant removed" }])
        })
        .catch(err => res.status(500).send([{ "name": "error", "message": err.message }]));
}
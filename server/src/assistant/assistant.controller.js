"use strict"

const joi = require('joi');
const assistantModel = require('./assistant.model');

const schema = joi.object().keys({
    id: joi.number().integer(),
    name: joi.string().required(),
    email: joi.string().email().required(),
    cid: joi.string().required(),
    photo: joi.string(),
    address: joi.string().required()

})

const schema_update = joi.object().keys({
    name: joi.string(),
    email: joi.string().email(),
    cid: joi.string(),
    photo: joi.string(),
    address: joi.string()
})

exports.post = function (req, res) {
    return joi.validate(req.body, schema)
        .then(function () {
            return assistantModel.find({ cid: req.body.cid })
                .then(function (found) {
                    if (found) {
                        return res.status(422).send({ "name": "cid", "message": "Cid already registered" });
                    }
                    return assistantModel.create(req.body)
                        .then(newTeacher => res.json(newTeacher))
                })
        })
        .catch(err => {
            if (err.isJoi) {
                return res.status(422).send({ name: err.details[0].context.key, message: err.details[0].message}
                );
            }
            res.status(500).send({ "name": "error", "message": err.message })
        });
}

exports.get = function (req, res) {
    
    if (req.query.request) {
        return assistantModel.findLike(req.query.request)
            .then(values => res.json(values))
            .catch(err => res.status(500).send({ "name": "error", "message": err.message }));
    }    
    return assistantModel.findAll({})
        .then(values => {
            res.json(values)
        })
        .catch(err => res.status(500).send({ "name": "error", "message": err.message }));

}

exports.getOneMiddleware = function (req, res, next) {
    return assistantModel.find({ id: req.params.id }).then(function (assist) {
        if (assist) {
            req.assistant = assist;
            return next();
        }
        return res.sendStatus(404);
    }).catch(err => res.status(500).send({ "name": "error", "message": err.message }));
}

exports.getOne = function (req, res) {
    res.json(req.assistant);
}

exports.put = function (req, res) {
    return joi.validate(req.body, schema_update)
        .then(function () {
            return assistantModel.find({ cid: req.body.cid })
                .then(function (found) {
                    if (found && (found.id !== req.assistant.id)) {
                        return res.status(422).send({ "name": "cid", "message": "Cid already registered" });
                    }
                    return assistantModel.update({ id: req.assistant.id }, req.body)
                        .then(newTeacher => res.json(newTeacher))
                })
        })
        .catch(err => {
            if (err.isJoi) {
		
                return res.status(422).send({ name: err.details[0].context.key, message: err.details[0].message });
            }
            res.status(500).send({ "name": "error", "message": err.message })
        });
}

exports.delete = function (req, res) {
    return assistantModel.delete({ id: req.assistant.id })
        .then(assistant => res.json({ "name": "removed", "message": "Assistant removed" }))
        .catch(err => res.status(500).send({ "name": "error", "message": err.message }));
}
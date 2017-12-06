"use strict"

const eventModel = require('../event/event.model');
const ticketModel = require('./ticket.model');
const joi = require('joi');

const schema = joi.object().keys({
    seat: joi.string().required()
})
const schema_update = joi.object().keys({
    seat: joi.string()
})



exports.post = function (req, res) {
    return joi.validate(req.body, schema, { allowUnknown: true }).then(function () {
        return ticketModel.findSameDate(req.body.assistant_id, req.event.date).then(
            function (found) {
                if (found.length > 0) {
                    return res.status(422).send({ "name": "error", "message": "You already have reserved this date" })
                }
                return ticketModel.find({ event_id: req.event.id, seat: req.body.seat })
                    .then(function (found) {
                        if (found) {
                            return res.status(422).send({ "name": "error", "message": "Seat busy" })
                        }
                        return ticketModel.create({ event_id: req.event.id, assistant_id: req.body.assistant_id, seat: req.body.seat, id: req.body.id })
                            .then(values => res.json(values));
                    })
            }
        )
    })
        .catch(err => {
            if(err.isJoi){
                return res.status(422).send(err.details.map(function (error) {
                    return { name: error.context.key, message: error.message }
                }));
            }
            res.status(500).send({ "name": "error", "message": err.message })
        });

}

exports.get = function (req, res) {
    return ticketModel.find(req.query)
    .then(values => res.json(values))
    .catch(err => res.status(500).send({ "name": "error", "message": err.message }));
}

exports.getOneMiddleware = function (req, res, next) {
    return ticketModel.find({id:req.params.ticketId}).then(function (ticket) {
        if (ticket) {
            req.ticket = ticket;
            return next();
        }
        return res.sendStatus(404);
    }).catch(err => res.status(500).send({ "name": "error", "message": err.message }));
}

exports.getOne = function (req, res) {
    return res.json(req.ticket);
}

exports.put = function (req, res) {
    return joi.validate(req.body, schema_update, { allowUnknown: true }).then(function () {
        return ticketModel.findSameDateUpdate(req.body.assistant_id, req.event.date, req.ticket.id).then(
            function (found) {
                if (found.length > 0) {
                    console.log(req.event.id)
                    console.log(found)
                    return res.status(422).send({ "name": "error", "message": "You already have reserved this date" })
                }
                return ticketModel.find({ event_id: req.event.id, seat: req.body.seat })
                    .then(function (found) {
                        if (found) {
                            console.log('neither here')
                            return res.status(422).send({ "name": "error", "message": "Seat busy" })
                        }
                        return ticketModel.update({id: req.ticket.id},{ event_id: req.event.id, assistant_id: req.body.assistant_id, seat: req.body.seat })
                            .then(values => res.json(values));
                    })
            }
        )
    })
        .catch(err => {
            if(err.isJoi){
                console.log('maybe here')
                return res.status(422).send(err.details.map(function (error) {
                    return { name: error.context.key, message: error.message }
                }));
            }
            res.status(500).send({ "name": "error", "message": err.message })
        });
}

exports.delete = function (req, res) {
    return ticketModel.delete({id:req.ticket.id})
    .then(ticket => {
        res.json({ "name": "removed", "message": "Assistant removed" })       
    })
    .catch(err => res.status(500).send({ "name": "error", "message": err.message }));
}
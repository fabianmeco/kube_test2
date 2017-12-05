"use strict"

const eventModel = require('../event/event.model');
const ticketModel = require('./ticket.model');



exports.post = function (req, res) {
    return ticketModel.findSameDate(req.body.assistant_id, req.event.date).then(
        function(found){
            if(found.length>0){
                return res.status(422).send({"name":"error", "message":"You already have reserved this date"})
            }
            return ticketModel.find({event_id:req.event.id, seat:req.body.seat})
            .then(function(found){
                if(found){
                    return res.status(422).send({"name":"error", "message":"Seat busy"})
                }
                return ticketModel.create({event_id: req.event.id, assistant_id: req.body.assistant_id, seat: req.body.seat})
                .then(values => res.json(values));
            })
        }
    )
    .catch(err => res.status(500).send({"name":"error", "message":err.message}));
    
}

exports.get = function (req, res) {

}

exports.getOneMiddleware = function (req, res, next) {

}

exports.getOne = function (req, res) {

}

exports.put = function (req, res) {

}

exports.delete = function (req, res) {

}
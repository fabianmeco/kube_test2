const express = require('express');
const router = express.Router();
const instanceRouter = express.Router();
const eventController = require('./event.controller');
const ticketRoute = require('../ticket');

router.post('/', eventController.post);

router.get('/', eventController.get)

router.use('/:id', eventController.getOneMiddleware, instanceRouter);

instanceRouter.get('/', eventController.getOne);

instanceRouter.put('/', eventController.put);

instanceRouter.delete('/', eventController.delete);

instanceRouter.use('/assistant', ticketRoute);

instanceRouter.use('/ticket', ticketRoute);

module.exports = router;
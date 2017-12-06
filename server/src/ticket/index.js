const express = require('express');
const router = express.Router();
const instanceRouter = express.Router();
const ticketController = require('./ticket.controller');

router.post('/', ticketController.post);

router.get('/', ticketController.get)

router.use('/:ticketId', ticketController.getOneMiddleware, instanceRouter);

instanceRouter.get('/', ticketController.getOne);

instanceRouter.put('/', ticketController.put);

instanceRouter.delete('/', ticketController.delete);

module.exports = router;
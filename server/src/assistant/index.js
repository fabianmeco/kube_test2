const express = require('express');
const router = express.Router();
const instanceRouter = express.Router();
const assistantController = require('./assistant.controller');
const ticketRoute = require('../ticket');

router.post('/', assistantController.post);

router.get('/', assistantController.get)

router.use('/:id', assistantController.getOneMiddleware, instanceRouter);

instanceRouter.get('/', assistantController.getOne);

instanceRouter.put('/', assistantController.put);

instanceRouter.delete('/', assistantController.delete);

instanceRouter.use('/ticket', ticketRoute);

module.exports = router;
const express = require('express');
const router = express.Router();
const assistant = require('./assistant');
const event = require('./event');
const ticket = require('./ticket');

router.use('/assistant', assistant);

router.use('/event', event);

module.exports = router;
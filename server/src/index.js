const express = require('express');
const app = express();
const cors = require('cors');
const body = require('body-parser');
const route = require('./routes');

app.listen(3000, function(){ console.log("App listening on port 3000")})

app.use(body.urlencoded({extended:false}));

app.use(body.json());

app.use(cors());

app.use('/', route)

module.exports = app;


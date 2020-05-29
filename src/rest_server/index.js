const express = require('express')
const bodyParser = require('body-parser')

const rest_server = express()
const api_rest = require('./routes')

rest_server.use(bodyParser.urlencoded({extended: false}))
rest_server.use(bodyParser.json())
rest_server.use('/', api_rest)

module.exports = rest_server
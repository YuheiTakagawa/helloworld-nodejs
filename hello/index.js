const express = require('express')
const a = require('./hello.js')
const router = express.Router()

router
    .get('/', a.simple)
    .get('/hello', a.hello)
    .post('/world', a.world)

module.exports = router;

const express = require('express')
const router = express.Router()

router
    .get('/', simple)
    .get('/hello', hello)
    .post('/world', world)

module.exports = router;

function simple(req, res, next) {
    return res.send('Simple REST API')
}

function hello(req, res, next) {
    let name = ""
    if (req.query.name) {
        name = req.query.name
    }
    return res.send('Hello World, ' + name)
}

function world(req, res, next) {
    let name = ""
    console.log(req.body)
    if (req.body.name) {
        name = req.body.name
    }
    return res.send('Hello World, ' + name)
}

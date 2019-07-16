const express = require('express')
const router = express.Router()

router
    .get('/', (req, res) => {
        res.send('Simple REST API')
    })
    .get('/hello', (req, res) => {
        let name = ""
        if (req.query.name) {
            name = req.query.name
        }
        res.send('Hello World, ' + name)
    })
    .post('/world', (req, res) => {
        let name = ""
        console.log(req.body)
        if (req.body.name) {
            name = req.body.name
        }
        res.send('Hello World, ' + name)
    })

module.exports = router;

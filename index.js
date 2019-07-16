const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

const port = process.env.PORT || 3000


app.listen(port, () => console.log(`Listening on port ${port}...`))

app.get('/', (req, res) => {
    res.send('Simple REST API')
})
app.get('/hello', (req, res) => {
    let name = ""
    if (req.query.name) {
        name = req.query.name
    }
    res.send('Hello World, ' + name)
})

app.post('/world', (req, res) => {
    let name = ""
    console.log(req.body)
    if (req.body.name) {
        name = req.body.name
    }
    res.send('Hello World, ' + name)
})

const express = require('express')
const bodyParser = require('body-parser')
const hello = require('./hello/index')
const app = express()

app.use(bodyParser.json())
app.use('/api', hello)

const port = process.env.PORT || 3000


app.listen(port, () => console.log(`Listening on port ${port}...`))

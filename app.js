const express = require('express');

const app = express()

app.use('/', (req, res) => {
    res.send("<h1>Testing API</h1>")
})

module.exports = app
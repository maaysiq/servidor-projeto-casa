const express = require('express')
const app = express()


const index = require('./routes/index')
const food = require('./routes/foodRoutes')

app.use((req, res, next) => {
    console.log('Nova requisiçao realizada')

    next()
})


app.use('/', index)
app.use('/comida', food)


module.exports = app
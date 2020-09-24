const express = require('express')
const app = express()


const index = require('./routes/index')
const cities = require('./routes/citiesRoutes')

app.use((req, res, next) => {
    console.log('Nova requisiçao realizada')

    next()
})


app.use('/', index)
app.use('/cidade', cities)


module.exports = app
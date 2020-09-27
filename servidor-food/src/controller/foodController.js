const food = require('../model/food.json')

const getAll = (req, res) => {
    console.log(req.url)

    res.send(food)
}

module.exports ={getAll}
const express = require('express')
const router = express.Router()
const controller = require('../controller/citiesController')

router.get('/', controller.getAll)
router.get('/cidade', controller.getAll)


module.exports = router
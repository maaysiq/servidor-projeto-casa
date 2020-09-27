const express = require('express')
const router = express.Router()
const controller = require('../controller/foodController')

router.get('/', controller.getAll)
router.get('/cidade', controller.getAll)


module.exports = router

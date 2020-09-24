const express = require('express')
const router = express.Router()

router.get('/',(req, res) => {
    res.send({
        titulo: 'Aqui você encontra as 10 cidades turiticas mais procuradas e seus principais pontos turisticos!',
        fonte: 'Mayara Siqueira'
    })
})

module.exports = router
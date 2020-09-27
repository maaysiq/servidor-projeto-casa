const express = require('express')
const router =  express.Router()

router.get('/',(req, res) => {
    res.send({
        titulo: 'Aqui você encontra 10 tipos de comidas e seus paises de Origem!',
        fonte: 'Mayara Siqueira'
    })
})

module.exports = router
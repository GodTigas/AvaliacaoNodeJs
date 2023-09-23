const express = require('express')
const ControllerCalculadora = require('../controllers/exercicios.js')

const controller = new ControllerCalculadora()
const router = express.Router()
router.get('/api/calculadora', controller.Calculadora)
router.post('/api/calculadora/somar', controller.Somar)
router.post('/api/calculadora/subtrair', controller.Subtrair)
router.post('/api/calculadora/multiplicar', controller.Multiplicar)
router.post('/api/calculadora/dividir', controller.Dividir),
module.exports = router

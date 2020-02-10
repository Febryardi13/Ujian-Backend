const express = require('express')
const router = express.Router()
const {movcatController} = require('../controllers')

router.get('/getmovcats',movcatController.getMovcat)
router.post('/postmovcats',movcatController.postMovcat)
router.delete('/deletemovcats/:id',movcatController.deleteMovcat)

module.exports = router
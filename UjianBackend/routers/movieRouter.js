const express = require('express')
const router = express.Router()
const {movieController} = require('../controllers')

router.get('/getmovies',movieController.getMovie)
router.post('/postmovies',movieController.postMovie)
router.put('/updatemovies',movieController.updateMovie)
router.delete('/deletemovies/:id',movieController.deleteMovie)

module.exports = router

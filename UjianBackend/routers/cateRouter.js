const express = require('express')
const router = express.Router()
const {cateController} = require('../controllers')

router.get('/getcatemovies',cateController.getCate)
router.post('/postcatemovies',cateController.postCate)
router.put('/updatecatemovies',cateController.updateCate)
router.delete('/deletecatemovies/:id',cateController.deleteCate)

module.exports = router
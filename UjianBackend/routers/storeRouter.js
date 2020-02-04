const express = require('express')
const router = express.Router()
const {storeController} = require('../controllers')

//create store
router.post('/poststore', storeController.postStore)

//create store
router.get('/getstore',storeController.getStore)

router.put('/updatestore',storeController.updateStore)

router.delete('/deletestore/:id',storeController.deleteStore) //kalo pakai params harus pakai /:id

module.exports = router
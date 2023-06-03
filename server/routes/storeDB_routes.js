const express = require('express')
const router = express.Router()

const dbController = require('../controllers/storeDB_controller')


router.route('/') //want by default to getALl items and make routes for other HTTP
.get(dbController.getAllItems) //have this point to storeDB_controller

router.route('/:id')
.get(dbController.getById)

router.route('/update/:id')
.patch(dbController.updateItem)

router.route('/post')
.post(dbController.addItem)

router.route('/delete/:id')
.delete(dbController.deleteById)

module.exports = router
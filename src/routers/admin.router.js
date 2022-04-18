const router = require('express').Router()
const adminController = require('../controllers/admin.controller')
const middlewareController = require('../controllers/middleware.controller')

router.post('/',adminController.addProduct)
router.put('/:id',middlewareController.verify,adminController.updateProduct)
router.delete('/:id',middlewareController.verify,adminController.deleteProduct)

router.put('/user/:id',middlewareController.verify,adminController.updateUser)
router.delete('/user/:id',middlewareController.verify,adminController.deleteUser)
router.get('/user/',adminController.viewAllUser)

module.exports = router
import {Router} from 'express'
const router = Router()

import * as productController from '../controllers/product.controller'

router.post('/crear', productController.createProduct)
router.get('/listar', productController.getProducts)
router.get('/listarUno/:productId', productController.getProductById)
router.put('/actualizar/:productId', productController.updateProduct)
router.delete('/eliminar/:productId', productController.deleteProduct)

export default router
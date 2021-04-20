import {Router} from 'express'
const router = Router()

import * as productController from '../controllers/product.controller'

router.post('/', productController.createProduct)
router.get('/', productController.getProducts)
router.get('/:productId', productController.getProductById)
router.put('/:productId', productController.updateProduct)
router.delete('/:productId', productController.deleteProduct)

export default router
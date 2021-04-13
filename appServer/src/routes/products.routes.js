import {Router} from 'express'
const router = Router()

import * as productController from '../controllers/product.controller'

router.post('/crear', productController.createProduct)
router.get('/listar', productController.getProducts)

export default router
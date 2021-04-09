import {Router} from 'express'

const router = Router()

import * as courseController from '../controllers/course.controller'

router.get('/', courseController.createCourse)

export default router
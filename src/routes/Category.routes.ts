import { Router } from 'express';

import CategoryController from '../controllers/Category.controller';
import validBodyMiddleware from '../middlewares/validBody.middleware';
import validTokenMiddleware from '../middlewares/validToken.middleware';
import CategoryService from '../services/Category.service';
import * as schemas from '../utils/schema';

const router = Router();

const categoryService = new CategoryService();
const categoryController = new CategoryController(categoryService);

router.post('/categories', validBodyMiddleware(schemas.createCategorySchema), categoryController.create);
router.get('/categories', validTokenMiddleware, categoryController.getAll);
export default router;

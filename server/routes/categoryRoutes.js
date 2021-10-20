import express from 'express';
import { getCategory, postNewCategory } from '../controllers/category.js';

const router = express.Router();

router.get('/', getCategory);
router.post('/', postNewCategory);
// router.patch('/', patchCategory);
// router.put('/', updateCategory);
// router.delete('/', deleteCategory);

export default router;
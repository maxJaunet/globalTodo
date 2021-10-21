import express from 'express';
import {
    getAllCategories,
    getSingleCategory,
    postNewCategory,
    updateCategory,
    patchCategory,
    deleteCategory
} from '../controllers/category.js';

const router = express.Router();

router.get('/', getAllCategories);
router.get('/:catTitle', getSingleCategory);
router.post('/', postNewCategory);
router.put('/:catTitle', updateCategory);
router.patch('/:catTitle', patchCategory);
router.delete('/:catTitle', deleteCategory);

export default router;
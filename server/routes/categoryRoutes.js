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
router.put('/:catTitle/update', updateCategory);
router.patch('/:catTitle/patch', patchCategory);
router.delete('/:catId', deleteCategory);

export default router;
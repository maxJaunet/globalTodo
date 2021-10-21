import express from 'express';
import {
    getAllPosts,
    getSinglePost,
    postNewPost,
    updatePost,
    patchPost,
    deletePost
} from '../controllers/post.js';

const router = express.Router();

router.get('/', getAllPosts);
router.get('/:catTitle', getSinglePost);
router.post('/', postNewPost);
router.put('/:catTitle', updatePost);
router.patch('/:catTitle', patchPost);
router.delete('/:catTitle', deletePost);

export default router;
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
router.get('/:postTitle', getSinglePost);
router.post('/post', postNewPost);
router.put('/:postTitle/put', updatePost);
router.patch('/:postTitle/patch', patchPost);
router.delete('/:postId', deletePost);

export default router;
import express from 'express';
import { getPostIt, postNewPostIt } from '../controllers/postIt.js';

const router = express.Router();

router.get('/', getPostIt);
router.post('/', postNewPostIt);

export default router;
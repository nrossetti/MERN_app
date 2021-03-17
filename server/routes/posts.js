import express from 'express';

import { getProjects, getProject, createProject, updateProject, likeProject, deleteProject } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getProjects);
router.post('/', createProject);
router.get('/:id', getProject);
router.patch('/:id', updateProject);
router.delete('/:id', deleteProject);
router.patch('/:id/likeProject', likeProject);

export default router;
import { Router } from 'express';
import path from 'path';

import userRoutes from './userRoutes';
import childRoutes from './childRoutes';
/**
 * Contains all API routes for the application.
 */
const router = Router();

/**
 * GET /api
 */
router.get('/', (req, res) => {
  response.sendFile(path.join('/index.html'));
});


router.use('/user', userRoutes);
router.use('/child', childRoutes);

export default router;

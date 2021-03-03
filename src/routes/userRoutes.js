import { Router } from 'express';

import * as userController from '../controllers/users';

const router = Router();

/**
 * GET /api/users/:id
 */
router.get('/:id', userController.fetchById);


export default router;

import { Router } from 'express';

import * as childrenController from '../controllers/children';
import { findChild, childValidator } from '../validators/childValidator';

const router = Router();

/**
 * GET /api/users
 */
router.get('/', childrenController.fetchAll);

/**
 * GET /api/users/:id
 */
router.get('/:id', childrenController.fetchById);

/**
 * POST /api/users
 */
router.post('/', childrenController.create);

/**
 * PUT /api/users/:id
 */
router.put('/:id', childrenController.update);

/**
 * DELETE /api/users/:id
 */
router.delete('/:id', childrenController.deleteUser);

export default router;

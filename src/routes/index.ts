import { Request, Response, Router } from 'express';

import search from './search';
import auth from './auth';
import authenticate from '../middleware/authenticate';

const router = Router();

router.use('/auth', auth);
router.use('/search', authenticate, search);

// Handel unknown routes
router.use((_req: Request, res: Response) => {
  res.status(404).json({ error: 'Not found' });
});

export default router;

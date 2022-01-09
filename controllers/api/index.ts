import { RequestHandler, Router } from 'express';
import bunyan from 'bunyan';
import banano from './banano';

const logger = bunyan.createLogger({ name: 'request' });
const router = Router({ mergeParams: true });
router.use('/banano', banano);
export default router;

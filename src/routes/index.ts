import { Router } from 'express';
import { gameRouter } from './game.routes';
import { islandsRouter } from './islands.routes';

const router = Router();

router.use('/game', gameRouter);
router.use('/islands', islandsRouter);

export { router };

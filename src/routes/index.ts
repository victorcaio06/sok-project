import { Router } from 'express';
import { gameRouter } from './game.routes';
import { islandsRouter } from './islands.routes';
import { monstersRouter } from './monsters.routes';

const router = Router();

router.use('/game', gameRouter);
router.use('/islands', islandsRouter);
router.use('/monsters', monstersRouter);

export { router };

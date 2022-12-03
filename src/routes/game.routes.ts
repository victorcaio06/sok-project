import { Router } from 'express';
import { CreateGameController } from '../modules/game/useCases/createGame/createGameController';
import CreateGameUseCase from '../modules/game/useCases/createGame/createGameUseCase';

const createGameUseCase = new CreateGameUseCase();
const createGameController = new CreateGameController(createGameUseCase);

const gameRouter = Router();

gameRouter.post('/addGame', (request, response) => {
  return createGameController.handle(request, response);
});

export { gameRouter };

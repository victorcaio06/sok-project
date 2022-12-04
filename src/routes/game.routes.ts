import { Router } from 'express';
import { CreateGameController } from '../modules/game/useCases/createGame/createGameController';
import CreateGameUseCase from '../modules/game/useCases/createGame/createGameUseCase';
import SeeGameController from '../modules/game/useCases/seeGame/seeGameController';
import SeeGameUseCase from '../modules/game/useCases/seeGame/seeGameUseCase';
import UpdateGameController from '../modules/game/useCases/updateGame/updateGameController';
import UpdateGameUseCase from '../modules/game/useCases/updateGame/updateGameUseCase';

const createGameUseCase = new CreateGameUseCase();
const createGameController = new CreateGameController(createGameUseCase);

const seeGameUseCase = new SeeGameUseCase();
const seeGameController =  new SeeGameController(seeGameUseCase);

const updateGameUseCase = new UpdateGameUseCase();
const updateGameController = new UpdateGameController(updateGameUseCase);

const gameRouter = Router();

gameRouter.post('/addGame', (request, response) => {
  return createGameController.handle(request, response);
});

gameRouter.get('/getGame/:id', (request, response) => {
  return seeGameController.handle(request, response);
})

gameRouter.patch('/updateGame/:id', (request, response) => {
  return updateGameController.handle(request, response);
});

export { gameRouter };

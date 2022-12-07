import { Router } from 'express';
import CreateMonsterController from '../modules/monsters/useCases/createMonster/createMonsterController';
import CreateMonsterUseCase from '../modules/monsters/useCases/createMonster/createMonsterUseCase';

const createMonsterUseCase = new CreateMonsterUseCase();
const createMonsterController = new CreateMonsterController(createMonsterUseCase);

const monstersRouter = Router();

monstersRouter.post('/createMonster', (request, response) => {
  return createMonsterController.handle(request, response);
});

export { monstersRouter };

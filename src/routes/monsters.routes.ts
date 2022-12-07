import { Router } from 'express';
import CreateMonsterController from '../modules/monsters/useCases/createMonster/createMonsterController';
import CreateMonsterUseCase from '../modules/monsters/useCases/createMonster/createMonsterUseCase';
import UpdateMonsterController from '../modules/monsters/useCases/updateMonster/updateMonsterController';
import UpdateMonsterUseCase from '../modules/monsters/useCases/updateMonster/updateMonsterUseCase';

const createMonsterUseCase = new CreateMonsterUseCase();
const createMonsterController = new CreateMonsterController(createMonsterUseCase);

const updateMonsterUseCase = new UpdateMonsterUseCase();
const updateMonsterController = new UpdateMonsterController(updateMonsterUseCase);

const monstersRouter = Router();

monstersRouter.post('/createMonster', (request, response) => {
  return createMonsterController.handle(request, response);
});

monstersRouter.patch('/updateMonster/:name', (request, response) => {
  return updateMonsterController.handle(request, response);
});

export { monstersRouter };

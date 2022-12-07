import { Router } from 'express';
import CreateIslandsController from '../modules/islands/useCases/createIslands/createIslandsController';
import CreateIslandsUseCase from '../modules/islands/useCases/createIslands/createIslandsUseCase';

const createIslandsUseCase = new CreateIslandsUseCase();
const createIslandsController = new CreateIslandsController(createIslandsUseCase);

const islandsRouter = Router();

islandsRouter.post('/addIslands', (request, response) => {
  return createIslandsController.handle(request, response);
});

export {islandsRouter}

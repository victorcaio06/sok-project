import { Router } from 'express';
import CreateIslandsController from '../modules/islands/useCases/createIslands/createIslandsController';
import CreateIslandsUseCase from '../modules/islands/useCases/createIslands/createIslandsUseCase';
import SeeIslandsController from '../modules/islands/useCases/seeIslands/seeIslandsController';
import SeeIslandsUseCase from '../modules/islands/useCases/seeIslands/seeIslandsUseCase';
import UpdateIslandsController from '../modules/islands/useCases/updateIslands/updateIslandsController';
import UpdateIslandsUseCase from '../modules/islands/useCases/updateIslands/updateIslandsUseCase';

const createIslandsUseCase = new CreateIslandsUseCase();
const createIslandsController = new CreateIslandsController(createIslandsUseCase);

const updateIslandsUseCase = new UpdateIslandsUseCase();
const updateIslandsController = new UpdateIslandsController(updateIslandsUseCase);

const seeIslandsUseCase =  new SeeIslandsUseCase();
const seeIslandsCotnroller = new SeeIslandsController(seeIslandsUseCase);

const islandsRouter = Router();

islandsRouter.post('/addIslands', (request, response) => {
  return createIslandsController.handle(request, response);
});

islandsRouter.patch('/updateIslands/:name', (request, response) => {
  return updateIslandsController.handle(request, response);
});

islandsRouter.get('/getIslands/:name', (request, response) => {
  return seeIslandsCotnroller.handle(request, response);
})

export { islandsRouter };

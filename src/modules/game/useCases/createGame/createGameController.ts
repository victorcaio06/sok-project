import { Request, Response } from 'express';
import CreateGameUseCase from './createGameUseCase';

class CreateGameController {
  constructor(private createGameUseCase: CreateGameUseCase) {}

  handle(request: Request, response: Response): Response {
    const { description, warning, additional } = request.body;
    console.log(request.body);
    try {
      this.createGameUseCase.execute({ description, warning, additional });
    } catch (error) {
      return response.status(400).json({ error });
    }

    return response.status(201).send();
  }
}

export { CreateGameController };

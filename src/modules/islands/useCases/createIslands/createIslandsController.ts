import { Request, Response } from 'express';
import CreateIslandsUseCase from './createIslandsUseCase';

export default class CreateIslandsController {
  constructor(private createIslandsUseCase: CreateIslandsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, warning, additional } = request.body;

    try {
      await this.createIslandsUseCase.execute({name, description, warning, additional});
    } catch (error) {
      return response.status(400).json({ error });
    }

    return response.sendStatus(201);
  }
}

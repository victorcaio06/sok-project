import { Request, Response } from 'express';
import CreateMonsterUseCase from './createMonsterUseCase';

export default class CreateMonsterController {
  constructor(private createMonsterUseCase: CreateMonsterUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, hability, life, loot, description, additional, island } = request.body;

    try {
      await this.createMonsterUseCase.execute({name, hability, life, loot, description, additional, island});
    }
    catch (error) {
      return response.status(400).json({error})
    }

    return response.sendStatus(201);
  }
}

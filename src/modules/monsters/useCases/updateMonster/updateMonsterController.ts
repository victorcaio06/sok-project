import { Request, Response } from 'express';
import UpdateMonsterUseCase from './updateMonsterUseCase';

export default class UpdateMonsterController {
  constructor(private updateMonsterUseCase: UpdateMonsterUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.params;
    const { hability, life, description, additional, loot } = request.body;

    try {
      await this.updateMonsterUseCase.execute(name, {
        hability,
        life,
        description,
        loot,
        additional,
      });
    } catch (error) {
      return response.status(400).json({ error });
    }

    return response.sendStatus(204);
  }
}

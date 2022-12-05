import { Request, Response } from 'express';
import UpdateGameUseCase from './updateGameUseCase';

export default class UpdateGameController {
  constructor(private updateGameUseCase: UpdateGameUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { description, additional, warning } = request.body;
    await this.updateGameUseCase.execute(+id, {
      description,
      additional,
      warning,
    });

    return response.sendStatus(204);
  }
}

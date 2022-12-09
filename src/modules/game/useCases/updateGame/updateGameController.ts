import { Request, Response } from 'express';
import UpdateGameUseCase from './updateGameUseCase';

export default class UpdateGameController {
  constructor(private updateGameUseCase: UpdateGameUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { description, additional, warning } = request.body;

    try {
      await this.updateGameUseCase.execute(+id, {
        description,
        additional,
        warning,
      });
    } catch (error) {
      return response.status(400).json({ error });
    }

    return response.sendStatus(204);
  }
}

import { Request, Response } from 'express';
import UpdateGameUseCase from './updateGameUseCase';

export default class UpdateGameController {
  constructor(private updateGameUseCase: UpdateGameUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { description, additional, warning } = request.body;
    console.log(`Aqui é o id: ${id}, já aqui é a data: ${description}`);
    await this.updateGameUseCase.execute(+id, {
      description,
      additional,
      warning,
    });
    return response.status(204).json({});
  }
}

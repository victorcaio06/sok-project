import { Request, Response } from 'express';
import UpdateIslandsUseCase from './updateIslandsUseCase';

export default class UpdateIslandsController {
  constructor(private updateIslandsUseCase: UpdateIslandsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.params;
    const { description, warning, additional } = request.body;

    try {
      await this.updateIslandsUseCase.execute({
        name,
        description,
        warning,
        additional,
      });
    } catch (error) {
      return response.status(400).json({ error });
    }
    return response.status(204).json({});
  }
}

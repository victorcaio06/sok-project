import { Request, Response } from 'express';
import SeeGameUseCase from './seeGameUseCase';

export default class SeeGameController {
  constructor(private seeGameUseCase: SeeGameUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const getGame = await this.seeGameUseCase.execute(+id)
    return response.status(200).send(getGame);
  }
}

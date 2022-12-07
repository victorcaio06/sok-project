import { Request, Response } from 'express';
import SeeIslandsUseCase from './seeIslandsUseCase';

export default class SeeIslandsController {
  constructor(private seeIslandsUseCase: SeeIslandsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.params;

    try {
      await this.seeIslandsUseCase.execute(name);
    } catch (error) {
      return response.status(400).json({ error });
    }

    return response.status(200).json({});
  }
}

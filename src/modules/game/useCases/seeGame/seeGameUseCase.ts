import { Game } from '@prisma/client';
import { Prisma } from '../../../../database';

export default class SeeGameUseCase {
  async execute(id: number): Promise<Game | void> {
    const getGame = await Prisma.game.findUnique({ where: { id } });
    return getGame;
  }
}

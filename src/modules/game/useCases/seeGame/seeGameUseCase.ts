import { Game } from '@prisma/client';
import { Prisma } from '../../../../database';

export default class SeeGameUseCase {
  async execute(id: number): Promise<Game | any> {
    const getGame = await Prisma.game.findUnique({
      where: { id },
      select: { id: false, description: true, additional: true, warning: true },
    });
    return getGame;
  }
}

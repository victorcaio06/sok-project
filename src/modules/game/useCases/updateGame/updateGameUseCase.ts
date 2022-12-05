import { Game } from '@prisma/client';
import { Prisma } from '../../../../database';
import UpdateGameDTO from '../../dto/update-game-dto';

export default class UpdateGameUseCase {
  async execute(
    id: number,
    { description, additional, warning }: UpdateGameDTO
  ): Promise<void | Game> {
    return await Prisma.game.update({
      where: { id },
      data: { description, additional, warning },
    });
  }
}

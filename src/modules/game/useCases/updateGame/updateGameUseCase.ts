import { Prisma } from '../../../../database';
import UpdateGameDTO from '../../dto/update-game-dto';

export default class UpdateGameUseCase {
  async execute(
    id: number,
    { description, additional, warning }: UpdateGameDTO
  ): Promise<void> {
    const data = { description, additional, warning };
    await Prisma.game.update({ where: { id }, data });
    return;
  }
}

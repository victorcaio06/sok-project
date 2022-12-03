import { Prisma } from '../../../../database';
import CreateGameDTO from '../../dto/create-game-dto';

export default class CreateGameUseCase {
  async execute({ description, warning, additional }: CreateGameDTO): Promise<void> {
    const data = { description, warning, additional };

    await Prisma.game.create({ data });

    return;
  }
}

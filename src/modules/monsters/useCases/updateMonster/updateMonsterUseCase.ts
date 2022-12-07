import { Prisma } from '../../../../database';
import UpdateMonsterDTO from '../../dto/update-monster-dto';

export default class UpdateMonsterUseCase {
  async execute(
    name: string,
    { hability, life, description, additional, loot }: UpdateMonsterDTO
  ): Promise<void> {
    await Prisma.monsters.update({
      where: { name },
      data: { hability, life, loot, description, additional },
    });
    return;
  }
}

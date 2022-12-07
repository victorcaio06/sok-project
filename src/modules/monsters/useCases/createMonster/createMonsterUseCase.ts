import { Prisma } from '../../../../database';
import MonsterModel from '../../model/monsterModel';

export default class CreateMonsterUseCase {
  async execute({
    name,
    hability,
    life,
    loot,
    description,
    additional,
    island,
  }: MonsterModel): Promise<void> {
    if (island) {
      await Prisma.monsters.create({
        data: {
          name,
          hability,
          life,
          loot,
          description,
          additional,
          islands: { connect: { name: island } },
        },
      });
    } else {
      await Prisma.monsters.create({
        data: {
          name,
          hability,
          life,
          loot,
          description,
          additional,
        },
      });
    }

    return;
  }
}

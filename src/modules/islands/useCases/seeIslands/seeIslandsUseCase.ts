import { Prisma } from '../../../../database';

export default class SeeIslandsUseCase {
  async execute(name: string): Promise<void | any> {
    const getIslands = await Prisma.islands.findUnique({
      where: { name },
      select: {
        name: true,
        description: true,
        warning: true,
        additional: true,
        Monsters: {
          select: {
            name: true,
            hability: true,
            life: true,
            loot: true,
            description: true,
            additional: true,
          },
        },
      },
    });
    return getIslands;
  }
}

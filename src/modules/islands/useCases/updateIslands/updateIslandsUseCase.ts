import { Prisma } from '../../../../database';
import UpdateIslandsDTO from '../../dto/update-islands-dto';

export default class UpdateIslandsUseCase {
  async execute({
    name,
    description,
    warning,
    additional,
  }: UpdateIslandsDTO): Promise<void> {
    const data = {
      description,
      warning,
      additional,
    };

    await Prisma.islands.update({ where: { name }, data });

    return;
  }
}

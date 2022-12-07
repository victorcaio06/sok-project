import { Prisma } from '../../../../database';
import CreateIslandsDTO from '../../dto/create-islands-dto';

export default class CreateIslandsUseCase {
  async execute({ name, description, warning, additional }: CreateIslandsDTO): Promise<void> {
    await Prisma.islands.create({ data: { name, description, additional, warning } });
    return;
  }
}

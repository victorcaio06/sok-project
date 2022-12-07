import { Monsters } from "@prisma/client";

export default class IslandsModel {
  name: string;
  description: string;
  warning: string;
  additional: string;
  monsters?: Monsters;
}

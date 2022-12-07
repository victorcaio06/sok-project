import MonsterModel from '../model/monsterModel';

export default class CreateMonsterDTO extends MonsterModel {
  name: string;
  hability: number;
  life: number;
  description: string;
  loot: string;
  additional: string;
  island?: string;
}

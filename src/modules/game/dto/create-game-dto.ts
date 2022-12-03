import GameModel from "../model/gameModel";

export default class CreateGameDTO extends GameModel {
  description: string
  additional?: string;
  warning?: string
}

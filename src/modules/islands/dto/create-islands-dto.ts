import IslandsModel from "../model/islandsModel";

export default class CreateIslandsDTO extends IslandsModel {
  name: string;
  description: string;
  warning: string;
  additional: string;
}

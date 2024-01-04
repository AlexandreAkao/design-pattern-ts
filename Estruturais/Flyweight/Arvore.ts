import { EspecieFlyWeight } from "./EspecieFlyWeight";

export class Arvore {
  private x: number;
  private y: number;
  private flyweight: EspecieFlyWeight;

  public constructor(x: number, y: number, flyweight: EspecieFlyWeight) {
    this.x = x;
    this.y = y;
    this.flyweight = flyweight;
  }

  public retornaArvore() {
    return {
      x: this.x,
      y: this.y,
      especie: this.flyweight.retornaEspecie(),
    };
  }
}

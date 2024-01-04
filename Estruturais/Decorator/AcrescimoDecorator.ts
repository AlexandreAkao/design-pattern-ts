import { Pizza } from "./Pizza";

export abstract class AcrescimoDecorator extends Pizza {
  protected pizza: Pizza;

  constructor(pizza: Pizza) {
    super();
    this.pizza = pizza;
  }
}

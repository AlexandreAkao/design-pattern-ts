import { AcrescimoDecorator } from "./AcrescimoDecorator";

export class MassaIntegral extends AcrescimoDecorator {
  public getDescricao(): string {
    return `${this.pizza.getDescricao()} + massa integral`;
  }
  public getPreco(): number {
    return this.pizza.getPreco() + 5;
  }
}

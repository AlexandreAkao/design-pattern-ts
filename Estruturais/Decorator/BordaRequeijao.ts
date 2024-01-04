import { AcrescimoDecorator } from "./AcrescimoDecorator";

export class BordaRequeijao extends AcrescimoDecorator {
  public getDescricao(): string {
    return `${this.pizza.getDescricao()} + borda recheada de requeijão`;
  }
  public getPreco(): number {
    return this.pizza.getPreco() + 8.5;
  }
}

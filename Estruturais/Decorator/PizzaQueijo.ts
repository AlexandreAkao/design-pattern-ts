import { Pizza } from "./Pizza";

export class PizzaQueijo extends Pizza {
  constructor() {
    super();
    this.descricao = "Deliciosa pizza de queijo";
  }

  public getDescricao(): string {
    return this.descricao;
  }

  public getPreco(): number {
    return 22;
  }
}

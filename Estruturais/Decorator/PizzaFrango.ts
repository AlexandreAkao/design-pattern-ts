import { Pizza } from "./Pizza";

export class PizzaFrango extends Pizza {

  constructor() {
    super()
    this.descricao = "Deliciosa pizza de frango"
  }

  public getDescricao(): string {
    return this.descricao;
  }

  public getPreco(): number {
    return 19
  }
}
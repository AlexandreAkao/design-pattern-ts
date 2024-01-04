import { Pizza } from "./Pizza";

export class PizzaCalabresa extends Pizza {

  constructor() {
    super()
    this.descricao = "Deliciosa pizza de calabresa"
  }

  public getDescricao(): string {
    return this.descricao;
  }

  public getPreco(): number {
    return 25
  }
}
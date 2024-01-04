import { Pedido } from "./Pedido";

export class PedidoMoveis extends Pedido {
  private nomeSetor: string;

  constructor() {
    super();
    this.nomeSetor = "Moveis";
  }

  public getNomeSetor(): string {
    return this.nomeSetor;
  }
  public setNomeSetor(value: string) {
    this.nomeSetor = value;
  }
}
import { Pedido } from "./Pedido";

export class PedidoEletronicos extends Pedido {
  private nomeSetor: string;

  constructor() {
    super();
    this.nomeSetor = "Eletronicos";
  }

  public getNomeSetor(): string {
    return this.nomeSetor;
  }
  public setNomeSetor(value: string) {
    this.nomeSetor = value;
  }
}
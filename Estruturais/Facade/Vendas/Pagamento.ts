import { Pedido } from "./Pedido";

export abstract class Pagamento {
  protected pedido: Pedido;

  constructor(pedido: Pedido) {
    this.pedido = pedido;
  }

  public abstract realizarPagamento(): boolean;
}

import { Pedido } from "./Pedido";
import { State } from "./State";

export class EnviadoState implements State {
  private pedido: Pedido
  
  constructor(pedido: Pedido) {
    this.pedido = pedido;
  }

  sucessoAoPagar(): void {
    throw new Error("Operação não suportada, o pedido já foi pago e enviado");
  }
  despacharPedido(): void {
    throw new Error("Operação não suportada, o pedido enviado");
  }
  cancelarPedido(): void {
    throw new Error("Operação não suportada, o pedido enviado");
  }
}
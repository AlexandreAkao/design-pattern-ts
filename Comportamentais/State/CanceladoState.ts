import { Pedido } from "./Pedido";
import { State } from "./State";

export class CanceladoState implements State {
  private pedido: Pedido
  
  constructor(pedido: Pedido) {
    this.pedido = pedido;
  }

  sucessoAoPagar(): void {
    throw new Error("Operação não suportada, o pedido se encontra cancelado");
  }
  despacharPedido(): void {
    throw new Error("Operação não suportada, o pedido se encontra cancelado");
  }
  cancelarPedido(): void {
    throw new Error("Operação não suportada, o pedido já se encontra cancelado");
  }
}
import { Pedido } from "./Pedido";
import { State } from "./State";

export class PagoState implements State {
  private pedido: Pedido
  
  constructor(pedido: Pedido) {
    this.pedido = pedido;
  }

  sucessoAoPagar(): void {
    throw new Error("Operação não suportada, o pedido ja foi pago");
  }
  despacharPedido(): void {
    this.pedido.setEstadoAtual(this.pedido.getEnviado())
  }
  cancelarPedido(): void {
    this.pedido.setEstadoAtual(this.pedido.getCancelado())
  }

}
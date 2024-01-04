import { Pedido } from "./Pedido";
import { State } from "./State";

export class AguardandoPagamentoState implements State {
  private pedido: Pedido
  
  constructor(pedido: Pedido) {
    this.pedido = pedido;
  }

  sucessoAoPagar(): void {
    this.pedido.setEstadoAtual(this.pedido.getPago())
  }
  despacharPedido(): void {
    throw new Error("Operação não suportada, o pedido ainda não foi pago");
  }
  cancelarPedido(): void {
    this.pedido.setEstadoAtual(this.pedido.getCancelado())
  }

}
import { Pedido } from "./Pedido";

export class EmailPedido {
  private pedido: Pedido;

  constructor(pedido: Pedido) {
    this.pedido = pedido;
  }

  public enviarEmail(mensagem: string) {
    console.log(`Email enviado para ${this.pedido.getConsumidor().getEmail()}`);
    console.log(`Mensagem: ${mensagem}`);
  }
}

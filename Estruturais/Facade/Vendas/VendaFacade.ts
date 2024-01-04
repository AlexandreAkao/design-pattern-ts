import { Consumidor } from "../Consumidor";
import { Produto } from "../Produto";
import { EmailPedido } from "./EmailPedido";
import { Pagamento } from "./Pagamento";
import { PagamentoBoleto } from "./PagamentoBoleto";
import { PagamentoCredito } from "./PagamentoCredito";
import { Pedido } from "./Pedido";

export class VendaFacade {
  private pedido: Pedido;
  private pagamento: Pagamento;
  private emailPedido: EmailPedido;

  constructor(consumidor: Consumidor) {
    this.pedido = new Pedido(consumidor);
    this.emailPedido = new EmailPedido(this.pedido);
  }

  addProduto(produto: Produto) {
    this.pedido.addProduto(produto);
  }

  pedidoCredito() {
    this.pagamento = new PagamentoCredito(this.pedido);
    if (this.pagamento.realizarPagamento()) {
      this.emailPedido.enviarEmail(
        "Pagamento realizado com sucesso via crédito"
      );
    } else {
      this.emailPedido.enviarEmail("Falha no pagamento do crédito");
    }
  }

  pedidoBoleto() {
    this.pagamento = new PagamentoBoleto(this.pedido);
    if (this.pagamento.realizarPagamento()) {
      this.emailPedido.enviarEmail(
        "Pagamento realizado com sucesso via boleto"
      );
    } else {
      this.emailPedido.enviarEmail("Falha no pagamento do boleto");
    }
  }
}

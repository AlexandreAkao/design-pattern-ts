import { Pagamento } from "./Pagamento";

export class PagamentoCredito extends Pagamento {
  public realizarPagamento(): boolean {
    if (this.pedido.getValor() > 0) {
      return true;
    }
    return false;
  }
}

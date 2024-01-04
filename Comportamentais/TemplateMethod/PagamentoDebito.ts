import { Pagamento } from "./Pagamento";

export class PagamentoDebito extends Pagamento {
  public calcularTaxa(): number {
    return 4;
  }

  public calcularDesconto(): number {
      return this.valor * 0.05;
  }
}
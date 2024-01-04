import { Pagamento } from "./Pagamento";

export class PagamentoCredito extends Pagamento{
  public calcularTaxa(): number {
    return this.valor * 0.05;
  }

  public calcularDesconto(): number {
    if (this.valor > 300) {
      return this.valor * 0.02;
    }
    return 0;
  }
}
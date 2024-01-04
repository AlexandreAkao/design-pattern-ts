import { Pagamento } from "./Pagamento";

export class PagamentoDinheiro extends Pagamento {
  public calcularDesconto(): number {
      return this.valor * 0.1;
  }
}
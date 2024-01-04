import { Gateway } from "./Gateway"

export abstract class Pagamento {
  protected gateway: Gateway;
  protected valor: number;

  constructor(valor: number, gateway: Gateway) {
    this.valor = valor;
    this.gateway = gateway;
  }

  public calcularTaxa(): number {
    return 0;
  }

  public abstract calcularDesconto(): number

  public realizaCobranca(): boolean {
    const valorFinal = this.valor + this.calcularTaxa() - this.calcularDesconto();

    return this.gateway.cobrar(valorFinal);
  }
}
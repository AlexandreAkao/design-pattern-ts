export abstract class Boleto {
  protected valor: number;
  protected juros: number;
  protected desconto: number;
  protected multa: number;

  constructor(valor: number) {
    this.valor = valor;
  }

  public calcularJuros(): number {
    return this.valor * this.juros;
  }

  public calcularDesconto(): number {
    return this.valor * this.desconto;
  }

  public calcularMulta(): number {
    return this.valor * this.multa;
  }
}

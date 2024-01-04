import { CalculosFactory } from "./CalculosFactory";
import { Desconto } from "./Desconto";
import { Juros } from "./Juros";
import { Multa } from "./Multa";

export class Boleto {
  protected valor: number;
  protected juros: Juros;
  protected desconto: Desconto;
  protected multa: Multa;

  constructor(valor: number, factory: CalculosFactory) {
    this.valor = valor;
    this.juros = factory.criarJuros();
    this.desconto = factory.criarDesconto();
    this.multa = factory.criarMulta();
  }

  public calcularJuros(): number {
    return this.valor * this.juros.getJuros();
  }

  public calcularDesconto(): number {
    return this.valor * this.desconto.getDesconto();
  }

  public calcularMulta(): number {
    return this.valor * this.multa.getMulta();
  }
}

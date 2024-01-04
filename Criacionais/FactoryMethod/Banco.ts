import { Boleto } from "./Boleto";

export abstract class Banco {
  public gerarBoleto(vencimentoBoleto: number, valor: number): Boleto {
    let boleto = this.criarBoleto(vencimentoBoleto, valor);

    console.log(`Boleto gerado com sucesso no valor de R$ ${valor}`);
    console.log(`Valor Juros: R$ ${boleto.calcularJuros()}`);
    console.log(`Valor Desconto: R$ ${boleto.calcularDesconto()}`);
    console.log(`Valor Multa: R$ ${boleto.calcularMulta()}`);
    console.log("---------------");

    return boleto;
  }

  protected abstract criarBoleto(
    vencimentoBoleto: number,
    valor: number
  ): Boleto;
}

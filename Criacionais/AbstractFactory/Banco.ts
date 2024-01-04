import { Boleto } from "./Boleto";
import { CalculosFactory } from "./CalculosFactory";

export class Banco {
  public gerarBoleto(valor: number, factory: CalculosFactory): Boleto {
    let boleto = new Boleto(valor, factory);

    console.log(`Boleto gerado com sucesso no valor de R$ ${valor}`);
    console.log(`Valor Juros: R$ ${boleto.calcularJuros()}`);
    console.log(`Valor Desconto: R$ ${boleto.calcularDesconto()}`);
    console.log(`Valor Multa: R$ ${boleto.calcularMulta()}`);
    console.log("---------------");

    return boleto;
  }
}

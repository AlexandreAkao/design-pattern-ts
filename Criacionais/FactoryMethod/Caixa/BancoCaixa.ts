import { Banco } from "../Banco";
import { Boleto } from "../Boleto";
import { BancoCaixaBoleto10Dias } from "./BancoCaixaBoleto10Dias";
import { BancoCaixaBoleto30Dias } from "./BancoCaixaBoleto30Dias";
import { BancoCaixaBoleto60Dias } from "./BancoCaixaBoleto60Dias";

export class BancoCaixa extends Banco {
  protected criarBoleto(vencimentoBoleto: number, valor: number): Boleto {
    switch (vencimentoBoleto) {
      case 10:
        return new BancoCaixaBoleto10Dias(valor);
      case 30:
        return new BancoCaixaBoleto30Dias(valor);
      case 60:
        return new BancoCaixaBoleto60Dias(valor);
      default:
        throw new Error("Vencimento Indisponível");
    }
  }
}

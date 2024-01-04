import { BancoCaixaBoleto10Dias } from "./Caixa/BancoCaixaBoleto10Dias";
import { BancoCaixaBoleto30Dias } from "./Caixa/BancoCaixaBoleto30Dias";
import { BancoCaixaBoleto60Dias } from "./Caixa/BancoCaixaBoleto60Dias";

export class BoletoSimpleFactory {
  criarBoleto(vencimentoBoleto: number, valor: number) {
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

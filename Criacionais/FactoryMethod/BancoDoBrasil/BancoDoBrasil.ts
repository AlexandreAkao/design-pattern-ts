import { Banco } from "../Banco";
import { Boleto } from "../Boleto";
import { BancoDoBrasilBoleto10Dias } from "./BancoDoBrasilBoleto10Dias";
import { BancoDoBrasilBoleto30Dias } from "./BancoDoBrasilBoleto30Dias";
import { BancoDoBrasilBoleto60Dias } from "./BancoDoBrasilBoleto60Dias";

export class BancoDoBrasil extends Banco {
  protected criarBoleto(vencimentoBoleto: number, valor: number): Boleto {
    switch (vencimentoBoleto) {
      case 10:
        return new BancoDoBrasilBoleto10Dias(valor);
      case 30:
        return new BancoDoBrasilBoleto30Dias(valor);
      case 60:
        return new BancoDoBrasilBoleto60Dias(valor);
      default:
        throw new Error("Vencimento Indisponível");
    }
  }
}

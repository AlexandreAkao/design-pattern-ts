import { CalculosFactory } from "../CalculosFactory";
import { Desconto } from "../Desconto";
import { Juros } from "../Juros";
import { Multa } from "../Multa";
import { CaixaDesconto } from "./CaixaDesconto";
import { CaixaJuros } from "./CaixaJuros";
import { CaixaMulta } from "./CaixaMulta";

export class CaixaCalculosFactory implements CalculosFactory {
  criarJuros(): Juros {
    return new CaixaJuros();
  }
  criarDesconto(): Desconto {
    return new CaixaDesconto();
  }
  criarMulta(): Multa {
    return new CaixaMulta();
  }
}

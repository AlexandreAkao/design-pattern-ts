import { CalculosFactory } from "../CalculosFactory";
import { Desconto } from "../Desconto";
import { Juros } from "../Juros";
import { Multa } from "../Multa";
import { BBDesconto } from "./BBDesconto";
import { BBJuros } from "./BBJuros";
import { BBMulta } from "./BBMulta";

export class BBCalculosFactory implements CalculosFactory {
  criarJuros(): Juros {
    return new BBJuros();
  }
  criarDesconto(): Desconto {
    return new BBDesconto();
  }
  criarMulta(): Multa {
    return new BBMulta();
  }
}

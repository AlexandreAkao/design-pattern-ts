import { Desconto } from "./Desconto";
import { Juros } from "./Juros";
import { Multa } from "./Multa";

export interface CalculosFactory {
  criarJuros(): Juros;
  criarDesconto(): Desconto;
  criarMulta(): Multa;
}

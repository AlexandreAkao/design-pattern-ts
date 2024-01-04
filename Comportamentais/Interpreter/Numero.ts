import { Digito } from "./Digito";
import { Expressao } from "./Expressao";

export class Numero implements Expressao {
  private esquerda: Digito;
  private direita?: Numero;

  public constructor(esquerda: Digito, direita?: Numero) {
    this.esquerda = esquerda;
    this.direita = direita;
  }

  public interpretar(contexto: Record<string, number>): number {
    if (!this.direita) {
      return this.esquerda.interpretar(contexto);
    }

    return Number(
      this.esquerda.interpretar(contexto).toString() +
        this.direita.interpretar(contexto).toString()
    );
  }
}

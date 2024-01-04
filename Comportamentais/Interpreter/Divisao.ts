import { Operacao } from "./Operacao";

export class Divisao extends Operacao {
  public interpretar(contexto: Record<string, number>): number {
    return Math.trunc(
      this.esquerda.interpretar(contexto) / this.direita.interpretar(contexto)
    );
  }
}

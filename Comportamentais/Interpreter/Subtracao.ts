import { Operacao } from "./Operacao";

export class Subtracao extends Operacao {
  public interpretar(contexto: Record<string, number>): number {
    return (
      this.esquerda.interpretar(contexto) - this.direita.interpretar(contexto)
    );
  }
}

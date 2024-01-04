import { Expressao } from "./Expressao";

export abstract class Operacao implements Expressao {
  protected esquerda: Expressao;
  protected direita: Expressao;

  public constructor(esquerda: Expressao, direita: Expressao) {
    this.esquerda = esquerda;
    this.direita = direita;
  }

  abstract interpretar(contexto: Record<string, number>): number;
}

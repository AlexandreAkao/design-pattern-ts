import { Expressao } from "./Expressao";

export class Variavel implements Expressao {
  private variavel: string;

  public constructor(variavel: string) {
    this.variavel = variavel;
  }

  private validarVariavel() {
    const alfabeto = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    return alfabeto.includes(this.variavel);
  }

  public interpretar(contexto: Record<string, number>): number {
    if (this.validarVariavel() && contexto[this.variavel]) {
      return contexto[this.variavel];
    }

    throw new Error(
      "A variável precisa ser uma letra de a-z e estar definida no contexto!"
    );
  }
}

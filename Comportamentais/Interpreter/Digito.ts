import { Expressao } from "./Expressao";

export class Digito implements Expressao {
  private digito: string;

  public constructor(digito: string) {
    this.digito = digito;
  }

  private validarDigito() {
    const digitos = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    return digitos.includes(this.digito);
  }

  public interpretar(contexto: Record<string, number>): number {
    if (this.validarDigito()) {
      return Number(this.digito);
    }

    throw new Error("Todo dígito deve ser um inteiro");
  }
}

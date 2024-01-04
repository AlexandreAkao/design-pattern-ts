import { Adicao } from "./Adicao";
import { Digito } from "./Digito";
import { Divisao } from "./Divisao";
import { Expressao } from "./Expressao";
import { Multiplicacao } from "./Multiplicacao";
import { Numero } from "./Numero";
import { Subtracao } from "./Subtracao";
import { Variavel } from "./Variavel";

export class Parser {
  private pilha: Expressao[] = [];
  private expressao: string;

  public constructor(expressao: string) {
    this.expressao = expressao.trim();
  }

  private isOperacao(token: string): boolean {
    const operacoes = ["+", "-", "*", "/"];
    return operacoes.includes(token);
  }

  private parseNumero(token: string): Numero | null {
    const pilhaNumero = [];
    const tamanhoOperando = token.length;
    let direita = null;

    for (let i = 0; i < tamanhoOperando; i++) {
      const parteToken = token.substring(i, i + 1);

      if (i == tamanhoOperando - 1) {
        pilhaNumero.push(new Digito(parteToken));

        while (pilhaNumero.length > 0) {
          const topoPilha = pilhaNumero.at(-1);

          if (topoPilha instanceof Digito) {
            if (!direita) {
              direita = new Numero(topoPilha);
              pilhaNumero.pop();
            } else {
              direita = new Numero(topoPilha, direita);
              pilhaNumero.pop();
            }
          }
        }
      } else {
        pilhaNumero.push(new Digito(parteToken));
      }
    }

    return direita;
  }

  public parse(): Expressao {
    const expressao = this.expressao.split(" ");

    for (const token of expressao) {
      if (this.isOperacao(token)) {
        const operandoDireita = this.pilha.pop();
        const operandoEsquerda = this.pilha.pop();

        if (operandoDireita && operandoEsquerda) {
          switch (token) {
            case "+":
              this.pilha.push(new Adicao(operandoEsquerda, operandoDireita));
              break;
            case "-":
              this.pilha.push(new Subtracao(operandoEsquerda, operandoDireita));
              break;
            case "*":
              this.pilha.push(
                new Multiplicacao(operandoEsquerda, operandoDireita)
              );
              break;
            case "/":
              this.pilha.push(new Divisao(operandoEsquerda, operandoDireita));
              break;
          }
        }
      } else if (!isNaN(Number(token))) {
        this.pilha.push(this.parseNumero(token) as Numero);
      } else {
        this.pilha.push(new Variavel(token));
      }
    }

    return this.pilha.at(-1) as Expressao;
  }
}

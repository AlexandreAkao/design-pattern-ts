import { Agregado } from "./Agregado";
import { Iterator } from "./Iterator";
import { MatrizIterator } from "./Matrizterator";

export class Matriz implements Agregado {
  private matriz: unknown[][] = [];
  private quantidadeLinhas: number;
  private quantidadeColunas: number;
  private linhaAtual: number = 0;
  private colunaAtual: number = 0;

  constructor(quantidadeLinhas: number, quantidadeColunas: number) {
    this.quantidadeLinhas = quantidadeLinhas;
    this.quantidadeColunas = quantidadeColunas;
  }

  addItem(item: unknown): boolean {
    if (
      this.linhaAtual === this.quantidadeLinhas - 1 &&
      this.colunaAtual == this.quantidadeColunas
    ) {
      return false;
    }

    if (this.colunaAtual === this.quantidadeColunas) {
      this.linhaAtual++;
      this.colunaAtual = 0;
    }

    const linha = this.matriz[this.linhaAtual];

    if (linha) {
      linha.push(item);
    } else {
      this.matriz.push([item]);
    }

    this.colunaAtual++;

    return true;
  }

  getItem(linha: number, coluna: number) {
    return this.matriz[linha][coluna];
  }

  getQuantidadeLinhas() {
    return this.quantidadeLinhas;
  }

  getQuantidadeColunas() {
    return this.quantidadeColunas;
  }

  createIterator(): Iterator {
    return new MatrizIterator(this);
  }
}

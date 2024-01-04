import { Iterator } from "./Iterator";
import { Matriz } from "./Matriz";

export class MatrizIterator implements Iterator {
  private matriz: Matriz;
  private indiceLinha: number = 0;
  private indiceColuna: number = 0;
  private quantidadeLinha: number;
  private quantidadeColuna: number;

  constructor(matriz: Matriz) {
    this.matriz = matriz;
    this.quantidadeLinha = matriz.getQuantidadeLinhas();
    this.quantidadeColuna = matriz.getQuantidadeColunas();
  }

  incrementarIndice() {
    if (this.indiceColuna === this.quantidadeColuna - 1) {
      this.indiceLinha++;
      this.indiceColuna = 0;
    } else {
      this.indiceColuna++;
    }
  }

  hasNext(): boolean {
    return !(this.indiceLinha >= this.quantidadeLinha);
  }

  next(): unknown {
    const item = this.matriz.getItem(this.indiceLinha, this.indiceColuna);
    this.incrementarIndice();
    return item;
  }
}

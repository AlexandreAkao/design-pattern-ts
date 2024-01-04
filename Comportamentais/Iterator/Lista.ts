import { Agregado } from "./Agregado";
import { Iterator } from "./Iterator";
import { ListIterator } from "./ListIterator";

export class Lista implements Agregado {
  private tamanho: number;
  private lista: unknown[] = [];

  constructor(tamanhoMaximo: number) {
    this.tamanho = tamanhoMaximo;
  }

  addItem(item: unknown): boolean {
    if (this.lista.length < this.tamanho) {
      this.lista.push(item);
      return true;
    }

    return false;
  }

  getItem(indice: number) {
    return this.lista[indice];
  }

  getTamanho() {
    return this.tamanho;
  }

  createIterator(): Iterator {
    return new ListIterator(this);
  }
}

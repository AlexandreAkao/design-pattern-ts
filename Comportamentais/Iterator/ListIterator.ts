import { Iterator } from "./Iterator";
import { Lista } from "./Lista";

export class ListIterator implements Iterator {
  private lista: Lista;
  private indice: number = 0;
  private tamanho: number;

  constructor(lista: Lista) {
    this.lista = lista;
    this.tamanho = lista.getTamanho();
  }

  hasNext(): boolean {
    return !(this.indice >= this.tamanho);
  }

  next(): unknown {
    const item = this.lista.getItem(this.indice);
    this.indice++;

    return item;
  }
}

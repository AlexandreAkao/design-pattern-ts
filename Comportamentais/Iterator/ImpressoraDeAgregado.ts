import { Agregado } from "./Agregado";

export class ImpressoraDeAgregado {
  static iterar(agregado: Agregado) {
    const iterator = agregado.createIterator();
    while (iterator.hasNext()) {
      process.stdout.write(`${iterator.next()} `);
    }
  }
}

import { UnsupportedOperationException } from "./UnsupportedOperationException";

export abstract class Component {
  adicionar(component: Component): void {
    throw new UnsupportedOperationException();
  }

  remove(component: Component): void {
    throw new UnsupportedOperationException();
  }

  recuperarFilho(indice: number): Component {
    throw new UnsupportedOperationException();
  }

  exibir(): void {
    throw new UnsupportedOperationException();
  }

  getNome(): string {
    throw new UnsupportedOperationException();
  }

  getCaminho(): string {
    throw new UnsupportedOperationException();
  }
}

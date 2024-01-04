import { Component } from "./Component";

export class GerenciadorDeArquivos {
  private raiz: Component;

  constructor(raiz: Component) {
    this.raiz = raiz;
  }

  exibirTodos(): void {
    this.raiz.exibir();
  }
}

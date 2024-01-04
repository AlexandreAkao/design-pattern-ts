import { Arquivo } from "./Arquivo";
import { Component } from "./Component";

export class Pasta extends Component {
  public nome: string;
  public caminho: string;
  public componentes: Component[];

  public constructor(nome: string, caminho: string) {
    super();
    this.nome = nome;
    this.caminho = caminho;
    this.componentes = [];
  }

  public adicionar(componente: Component): void {
    this.componentes.push(componente);
  }

  public remover(component: Component): void {
    this.componentes.forEach((arquivo, indice) => {
      if (arquivo == component) {
        this.componentes.splice(indice, 1);
      }
    });
  }

  public recuperarFilho(indice: number): Component {
    return this.componentes[indice];
  }

  public getNome(): string {
    return this.nome;
  }

  public getCaminho(): string {
    return this.caminho;
  }

  public exibir(): void {
    console.log(`## ${this.getNome()} - [${this.getCaminho()}] ##`);
    console.log("---------------------------------");
    this.componentes.forEach((arquivo) => {
      arquivo.exibir();
    });
  }
}

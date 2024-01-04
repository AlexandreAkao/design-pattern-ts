import { Component } from "./Component";

export class Arquivo extends Component {
  public nome: string;
  public caminho: string;

  public constructor(nome: string, caminho: string) {
    super();
    this.nome = nome;
    this.caminho = caminho;
  }

  public getNome(): string {
    return this.nome;
  }

  public getCaminho(): string {
    return this.caminho;
  }

  public exibir(): void {
    console.log(` - ${this.getNome()} - [${this.getCaminho()}]`);
  }
}

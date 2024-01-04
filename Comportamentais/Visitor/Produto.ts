import { Elemento } from "./Elemento";
import { Visitor } from "./Visitor";

export class Produto implements Elemento {
  private nome: string;
  private preco: number;
  private margemLucro: number;

  public constructor(nome: string, preco: number, margemLucro: number) {
    this.nome = nome;
    this.preco = preco;
    this.margemLucro = margemLucro;
  }

  public getNome(): string {
    return this.nome;
  }

  public getPreco(): number {
    return this.preco;
  }

  public getMargemLucro(): number {
    return this.margemLucro;
  }

  aceitar(visitor: Visitor): number {
    return visitor.visitProduto(this);
  }
}

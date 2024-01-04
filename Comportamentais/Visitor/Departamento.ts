import { Elemento } from "./Elemento";
import { Produto } from "./Produto";
import { Visitor } from "./Visitor";

export class Departamento implements Elemento {
  private nome: string;
  private produtos: Produto[] = [];

  public constructor(nome: string) {
    this.nome = nome;
  }

  public addProduto(produto: Produto) {
    this.produtos.push(produto);
  }

  public getNome(): string {
    return this.nome;
  }

  public getProdutos(): Produto[] {
    return this.produtos;
  }

  aceitar(visitor: Visitor): number {
    return visitor.visitDepartamento(this);
  }
}

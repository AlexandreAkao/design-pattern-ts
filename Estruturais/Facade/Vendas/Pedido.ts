import { Consumidor } from "../Consumidor";
import { Produto } from "../Produto";

export class Pedido {
  private consumidor: Consumidor;
  private produtos: Produto[] = [];
  private valor: number = 0;

  constructor(consumidor: Consumidor) {
    this.consumidor = consumidor;
  }

  public setConsumidor(consumidor: Consumidor): void {
    this.consumidor = consumidor;
  }

  public addProduto(produto: Produto): void {
    this.produtos.push(produto);
    this.valor += produto.getValor();
  }

  public getConsumidor(): Consumidor {
    return this.consumidor;
  }

  public getProdutos(): Produto[] {
    return this.produtos;
  }

  public getValor(): number {
    return this.valor;
  }
}

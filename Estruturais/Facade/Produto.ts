export class Produto {
  private nome: string;
  private descricao: string;
  private valor: number;

  constructor(nome: string, descricao: string, valor: number) {
    this.nome = nome;
    this.descricao = descricao;
    this.valor = valor;
  }

  public getNome(): string {
    return this.nome;
  }

  public getDescricao(): string {
    return this.descricao;
  }

  public getValor(): number {
    return this.valor;
  }
}

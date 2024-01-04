export class EspecieFlyWeight {
  private nome: string;
  private cor: string;
  private alturaMaxima: number;

  constructor(nome: string, cor: string, alturaMaxima: number) {
    this.nome = nome;
    this.cor = cor;
    this.alturaMaxima = alturaMaxima;
  }

  getNome() {
    return this.nome;
  }

  getCor() {
    return this.cor;
  }

  getAlturaMaxima() {
    return this.alturaMaxima;
  }

  retornaEspecie() {
    return {
      nome: this.nome,
      cor: this.cor,
      alturaMaxima: this.alturaMaxima,
    };
  }
}

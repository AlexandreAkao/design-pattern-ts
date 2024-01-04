import { Prototype } from "./Prototype";

export class Livro implements Prototype<Livro> {
  private nome: string;
  private autor: string;
  private numeroPaginas: number;

  public getNome(): string {
    return this.nome;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public getAutor(): string {
    return this.autor;
  }

  public setAutor(autor: string): void {
    this.autor = autor;
  }

  public getNumeroPaginas(): number {
    return this.numeroPaginas;
  }

  public setNumeroPaginas(numeroPaginas: number): void {
    this.numeroPaginas = numeroPaginas;
  }

  clone(): Livro {
    const clone = new Livro();
    clone.setNome(this.getNome());
    clone.setAutor(this.getAutor());
    clone.setNumeroPaginas(this.getNumeroPaginas());

    return clone;
  }
}

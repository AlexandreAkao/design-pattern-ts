import { Prototype } from "./Prototype";

export class Trabalho implements Prototype<Trabalho> {
  private nome: string;
  private autor: string;
  private tipo: string;

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

  public getTipo(): string {
    return this.tipo;
  }

  public setTipo(tipo: string): void {
    this.tipo = tipo;
  }

  clone(): Trabalho {
    const clone = new Trabalho();
    clone.setNome(this.getNome());
    clone.setAutor(this.getAutor());
    clone.setTipo(this.getTipo());

    return clone;
  }
}

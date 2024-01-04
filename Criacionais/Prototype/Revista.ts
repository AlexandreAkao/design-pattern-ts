import { Prototype } from "./Prototype";

export class Revista implements Prototype<Revista> {
  private nome: string;
  private edicao: number;

  public getNome(): string {
    return this.nome;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public getEdicao(): number {
    return this.edicao;
  }

  public setEdicao(edicao: number): void {
    this.edicao = edicao;
  }

  clone(): Revista {
    const clone = new Revista();
    clone.setNome(this.getNome());
    clone.setEdicao(this.getEdicao());

    return clone;
  }
}

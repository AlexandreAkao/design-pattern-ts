import { Arvore } from "./Arvore";
import { EspecieFabrica } from "./EspecieFabrica";

export class Plantacao {
  private arvores: Arvore[] = [];
  private especieFabrica: EspecieFabrica;

  constructor() {
    this.especieFabrica = new EspecieFabrica();
  }

  public addArvore(
    x: number,
    y: number,
    nome: string,
    cor: string,
    alturaMaxima: number
  ): void {
    const especie = this.especieFabrica.getEspecie(nome, cor, alturaMaxima);
    const arvore = new Arvore(x, y, especie);
    this.arvores.push(arvore);
  }

  public retornaEspecies() {
    const especies = this.especieFabrica.retornaTodasEspecies();
    const especiesArray = [];
    for (const especie of especies) {
      especiesArray.push(especie.retornaEspecie());
    }

    return especiesArray;
  }

  public retornaArvores(): unknown[] {
    const arvoresArray = [];

    for (const arvore of this.arvores) {
      arvoresArray.push(arvore.retornaArvore());
    }

    return arvoresArray;
  }
}

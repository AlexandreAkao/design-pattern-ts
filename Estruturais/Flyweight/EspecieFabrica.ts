import { EspecieFlyWeight } from "./EspecieFlyWeight";

export class EspecieFabrica {
  private especies: EspecieFlyWeight[] = [];

  public getEspecie(nome: string, cor: string, alturaMaxima: number) {
    for (const especie of this.especies) {
      if (
        especie.getNome() === nome &&
        especie.getCor() === cor &&
        especie.getAlturaMaxima() === alturaMaxima
      ) {
        return especie;
      }
    }

    const novaEspecie = new EspecieFlyWeight(nome, cor, alturaMaxima);
    this.especies.push(novaEspecie);

    return novaEspecie;
  }

  public retornaTodasEspecies() {
    return this.especies;
  }
}

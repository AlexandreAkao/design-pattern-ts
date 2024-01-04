import { IFrete } from "./IFrete";

export abstract class Pedido {
  private valor: number;
  private tipoFrete: IFrete;

  public getValor(): number {
    return this.valor;
  }
  public setValor(value: number) {
    this.valor = value;
  }

  public getTipoFrete(): IFrete {
    return this.tipoFrete;
  }
  public setTipoFrete(value: IFrete) {
    this.tipoFrete = value;
  }

  public calculaFrete(): number {
    return this.tipoFrete.calcula(this.valor)
  }
}
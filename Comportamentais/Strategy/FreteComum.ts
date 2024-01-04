import { IFrete } from "./IFrete";

export class FreteComum implements IFrete {
  calcula(valorPedido: number): number {
    return valorPedido * 0.05;
  }
}
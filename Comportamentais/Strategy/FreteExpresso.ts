import { IFrete } from "./IFrete";

export class FreteExpresso implements IFrete {
  calcula(valorPedido: number): number {
    return valorPedido * 0.1;
  }
}
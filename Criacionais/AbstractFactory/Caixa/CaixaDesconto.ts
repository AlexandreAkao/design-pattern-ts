import { Desconto } from "../Desconto";

export class CaixaDesconto implements Desconto {
  getDesconto(): number {
    return 0.1;
  }
}

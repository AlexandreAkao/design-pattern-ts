import { Desconto } from "../Desconto";

export class BBDesconto implements Desconto {
  public getDesconto(): number {
    return 0.05;
  }
}

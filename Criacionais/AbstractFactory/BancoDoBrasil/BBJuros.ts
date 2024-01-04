import { Juros } from "../Juros";

export class BBJuros implements Juros {
  getJuros(): number {
    return 0.03;
  }
}

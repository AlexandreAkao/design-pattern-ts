import { Juros } from "../Juros";

export class CaixaJuros implements Juros {
  getJuros(): number {
    return 0.02;
  }
}

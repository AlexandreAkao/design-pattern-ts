import { Boleto } from "../Boleto";

export class BancoCaixaBoleto60Dias extends Boleto {
  constructor(valor: number) {
    super(valor);
    this.juros = 0.1;
    this.desconto = 0;
    this.multa = 0.2;
  }
}

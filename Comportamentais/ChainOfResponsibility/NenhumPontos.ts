import { CalculadorDePontos } from "./CalculadorDePontos";
import { Pedido } from "./Pedido";

export class NenhumPontos implements CalculadorDePontos {
  private proximo: CalculadorDePontos;

  calcularPontosDoPedido(pedido: Pedido): number {
    return 0;
  }

  setProximo(proximo: CalculadorDePontos): void {}
}

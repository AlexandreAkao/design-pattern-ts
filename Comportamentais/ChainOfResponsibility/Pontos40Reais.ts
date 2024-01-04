import { CalculadorDePontos } from "./CalculadorDePontos";
import { Pedido } from "./Pedido";

export class Pontos40Reais implements CalculadorDePontos {
  private proximo: CalculadorDePontos;

  calcularPontosDoPedido(pedido: Pedido): number {
    if (pedido.getValor() >= 40) {
      return Math.trunc(pedido.getValor() / 7);
    }

    return this.proximo.calcularPontosDoPedido(pedido);
  }

  setProximo(proximo: CalculadorDePontos): void {
    this.proximo = proximo;
  }
}

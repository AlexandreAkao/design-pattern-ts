import { CalculadorDePontos } from "./CalculadorDePontos";
import { Pedido } from "./Pedido";

export class Pontos70Reais implements CalculadorDePontos {
  private proximo: CalculadorDePontos;

  calcularPontosDoPedido(pedido: Pedido): number {
    if (pedido.getValor() >= 70) {
      return Math.trunc(pedido.getValor() / 5);
    }

    return this.proximo.calcularPontosDoPedido(pedido);
  }

  setProximo(proximo: CalculadorDePontos): void {
    this.proximo = proximo;
  }
}

import { CalculadorDePontos } from "./CalculadorDePontos";
import { Pedido } from "./Pedido";

export class Pontos20Reais implements CalculadorDePontos {
  private proximo: CalculadorDePontos;

  calcularPontosDoPedido(pedido: Pedido): number {
    if (pedido.getValor() >= 20) {
      return Math.trunc(pedido.getValor() / 10);
    }

    return this.proximo.calcularPontosDoPedido(pedido);
  }

  setProximo(proximo: CalculadorDePontos): void {
    this.proximo = proximo;
  }
}

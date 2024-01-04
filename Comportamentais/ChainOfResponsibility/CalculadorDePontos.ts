import { Pedido } from "./Pedido";

export interface CalculadorDePontos {
  calcularPontosDoPedido(pedido: Pedido): number;
  setProximo(proximo: CalculadorDePontos): void;
}

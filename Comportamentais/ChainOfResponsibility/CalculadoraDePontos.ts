import { NenhumPontos } from "./NenhumPontos";
import { Pedido } from "./Pedido";
import { Pontos20Reais } from "./Pontos20Reais";
import { Pontos40Reais } from "./Pontos40Reais";
import { Pontos70Reais } from "./Pontos70Reais";

export class CalculadoraDePontos {
  public calcularPontosDoPedido(pedido: Pedido, dia: number): number {
    const pontos70 = new Pontos70Reais();
    const pontos40 = new Pontos40Reais();
    const pontos20 = new Pontos20Reais();
    const nenhumPonto = new NenhumPontos();

    pontos70.setProximo(pontos40);
    pontos40.setProximo(pontos20);
    pontos20.setProximo(nenhumPonto);

    const pontos = pontos70.calcularPontosDoPedido(pedido);

    if (dia >= 16 && dia <= 31) {
      return pontos * 2;
    }

    return pontos;
  }
}

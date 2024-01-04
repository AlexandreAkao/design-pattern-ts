import { CalculadoraDePontos } from "./CalculadoraDePontos";
import { Pedido } from "./Pedido";

const pedido = new Pedido();
const calculadoraDePontos = new CalculadoraDePontos();

pedido.setValor(21);

console.log(
  `Dia 15: ${calculadoraDePontos.calcularPontosDoPedido(pedido, 15)} Pontos`
);
console.log(
  `Dia 16: ${calculadoraDePontos.calcularPontosDoPedido(pedido, 16)} Pontos`
);

console.log("---------------------------");

pedido.setValor(100);

console.log(
  `Dia 15: ${calculadoraDePontos.calcularPontosDoPedido(pedido, 15)} Pontos`
);
console.log(
  `Dia 16: ${calculadoraDePontos.calcularPontosDoPedido(pedido, 16)} Pontos`
);

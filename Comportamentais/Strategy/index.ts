import { FreteComum } from "./FreteComum";
import { FreteExpresso } from "./FreteExpresso";
import { PedidoEletronicos } from "./PedidoEletronicos";

const pedido = new PedidoEletronicos();
pedido.setValor(100);

const freteComum = new FreteComum();
const freteExpresso = new FreteExpresso();

pedido.setTipoFrete(freteComum);

console.log(pedido.calculaFrete());

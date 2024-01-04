import { Gateway } from "./Gateway";
import { PagamentoCredito } from "./PagamentoCredito";
import { PagamentoDebito } from "./PagamentoDebito";
import { PagamentoDinheiro } from "./PagamentoDinheiro";

const valor = 100
const gateway = new Gateway();

console.log("Credito")
const pagamentoCredito = new PagamentoCredito(valor, gateway)
pagamentoCredito.realizaCobranca()

const pagamentoDebito = new PagamentoDebito(valor, gateway)
console.log("Debito")
pagamentoDebito.realizaCobranca()

console.log("Dinheiro")
const pagamentoDinheiro = new PagamentoDinheiro(valor, gateway)
pagamentoDinheiro.realizaCobranca()
import { Cobranca } from "./Cobranca";
import { PagFacilAdapter } from "./PagFacilAdapter";
import { PagFacil } from "./Terceiros/PagFacil";
import { TopPagamentos } from "./Terceiros/TopPagamentos";
import { TopPagamentosAdapter } from "./TopPagamentosAdapter";

const pagFacilAdapter = new PagFacilAdapter()

const topPagamentos = new TopPagamentos()
const topPagamentosAdapter = new TopPagamentosAdapter(topPagamentos)

const cobranca = new Cobranca(topPagamentosAdapter)

cobranca.setValor(100)
cobranca.setParcelas(3)
cobranca.setNumeroCartao("1234123412341234")
cobranca.setCVV("123")

if (cobranca.realizarPagamento()) {
  console.log("Pagamento realizado com sucesso")
} else {
  console.log("O pagamento falhou")
}

cobranca.setGateway(topPagamentosAdapter)

cobranca.setValor(100)
cobranca.setParcelas(3)
cobranca.setNumeroCartao("1234123412341234")
cobranca.setCVV("123")

if (cobranca.realizarPagamento()) {
  console.log("Pagamento realizado com sucesso")
} else {
  console.log("O pagamento falhou")
}
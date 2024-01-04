import { BancoDoBrasil } from "./BancoDoBrasil/BancoDoBrasil";
import { BancoCaixa } from "./Caixa/BancoCaixa";

console.log("##### Banco Caixa #####");
const banco = new BancoCaixa();

//Boleto com 10 dias para o vencimento.
banco.gerarBoleto(10, 100);

//Boleto com 10 dias para o vencimento.
banco.gerarBoleto(30, 100);

//Boleto com 10 dias para o vencimento.
banco.gerarBoleto(60, 100);

console.log("##### Banco do Brasil #####");

const bancoDoBrasil = new BancoDoBrasil();

//Boleto com 10 dias para o vencimento.
bancoDoBrasil.gerarBoleto(10, 100);

//Boleto com 10 dias para o vencimento.
bancoDoBrasil.gerarBoleto(30, 100);

//Boleto com 10 dias para o vencimento.
bancoDoBrasil.gerarBoleto(60, 100);

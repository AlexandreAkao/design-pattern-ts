import { Banco } from "./Banco";
import { BBCalculosFactory } from "./BancoDoBrasil/BBCalculosFactory";
import { CaixaCalculosFactory } from "./Caixa/CaixaCalculosFactory";

const banco = new Banco();

console.log("##### Banco Caixa #####");

const factoryCaixa = new CaixaCalculosFactory();

banco.gerarBoleto(100, factoryCaixa);

console.log("##### Banco do Brasil #####");

const factoryBB = new BBCalculosFactory();

banco.gerarBoleto(100, factoryBB);

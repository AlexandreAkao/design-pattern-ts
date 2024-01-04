import { BuilderA3 } from "./BuilderA3";
import { BuilderA4 } from "./BuilderA4";
import { GeradorPDFDirector } from "./GeradorPDFDirector";

console.log("## Criação do objeto A4 ##");

const builderA4 = new BuilderA4();
let director = new GeradorPDFDirector(builderA4);
director.criarGeradorPDFNoHeader();

let pdf = builderA4.getGeradorPDF();

//Impressão do Objeto A4
console.log(pdf);

console.log("## Criação do objeto A3 ##");

const builderA3 = new BuilderA3();
director.setBuilderGeradorPDF(builderA3);
director.criarGeradorPDF();

pdf = builderA3.getGeradorPDF();

//Impressão do Objeto A3
console.log(pdf);

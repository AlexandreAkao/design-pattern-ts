import { Departamento } from "./Departamento";
import { Lucratividade } from "./Lucratividade";
import { Produto } from "./Produto";
import { Supermercado } from "./Supermercado";

//Criação do supermercado
const supermercado = new Supermercado("Supermercado Esquina");

//Criação do departamento 1 e seus produtos
const departamento_1 = new Departamento("Alimentação Básica");
const arroz = new Produto("Arroz 5Kg", 18, 30);
const macarrao = new Produto("Macarrão", 3.2, 15);

//Adição dos produtos ao departamento 1
departamento_1.addProduto(arroz);
departamento_1.addProduto(macarrao);

//Criação do departamento 2 e seus produtos
const departamento_2 = new Departamento("Higiene");
const papelHigienico = new Produto("Papel Higiênico", 11, 35);
const sabonete = new Produto("Sabonete", 1.2, 10);

//Adição dos produtos ao departamento 2
departamento_2.addProduto(papelHigienico);
departamento_2.addProduto(sabonete);

//Adição dos departamentos ao supermercado
supermercado.addDepartamento(departamento_1);
supermercado.addDepartamento(departamento_2);

const lucratividade = new Lucratividade();

const lucratividadeSupermercado = supermercado.aceitar(lucratividade);
console.log(`Lucratividade Supermercado: R$${lucratividadeSupermercado}`);

const lucratividadeDepartamento1 = departamento_1.aceitar(lucratividade);
console.log(`Lucratividade Departamento 1: R$${lucratividadeDepartamento1}`);

const lucratividadeArroz = arroz.aceitar(lucratividade);
console.log(`Lucratividade Arroz: R$${lucratividadeArroz}`);

const lucratividadeMacarrao = macarrao.aceitar(lucratividade);
console.log(`Lucratividade Macarrão: R$${lucratividadeMacarrao}`);

const lucratividadeDepartamento2 = departamento_2.aceitar(lucratividade);
console.log(`Lucratividade Departamento 2: R$${lucratividadeDepartamento2}`);

const lucratividadePapelHigienico = papelHigienico.aceitar(lucratividade);
console.log(`Lucratividade Papel Higienico: R$${lucratividadePapelHigienico}`);

const lucratividadeSabonete = sabonete.aceitar(lucratividade);
console.log(`Lucratividade Sabonete: R$${lucratividadeSabonete}`);

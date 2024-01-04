import { Cliente } from "./Cliente";
import { Fornecedor } from "./Fornecedor";
import { Funcionario } from "./Funcionario";
import { Newsletter } from "./Newsletter";
import { Parceiro } from "./Parceiro";

const newsletter =  new Newsletter()

const funcionario1 = new Funcionario("Funcionario 1", "funcionario1@email.com", newsletter)
const funcionario2 = new Funcionario("Funcionario 2", "funcionario2@email.com", newsletter)

const cliente = new Cliente("Cliente 1", "cliente1@email.com", newsletter)

const parceiro = new Parceiro("Parceiro 1", "parceiro1@email.com", newsletter)

const fornecedor = new Fornecedor("Fornecedor 1", "fornecedor1@email.com", newsletter)

newsletter.addMensagem("Primeira mensagem")

console.log("\n#################")

newsletter.removeObserver(funcionario2)

newsletter.addMensagem("Segunda mensagem")

console.log("\n#################")

newsletter.removeObserver(parceiro)

newsletter.addMensagem("Terceira mensagem")
console.log("\n#################")

newsletter.registerObserver(funcionario2)

newsletter.addMensagem("Quarta mensagem")
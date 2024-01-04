import chalk from "chalk";

import { ChatBot } from "./ChatBot";
import { Humano } from "./Humano";
import { SalaDeChatMediator } from "./SalaDeChatMediator";

const chatBot1 = new ChatBot();
const salaDeChat1 = new SalaDeChatMediator(chatBot1, "Sala de chat 1");

const chatBot2 = new ChatBot();
const salaDeChat2 = new SalaDeChatMediator(chatBot2, "Sala de chat 2");

const joao = new Humano("João");
const maria = new Humano("Maria");
const paulo = new Humano("Paulo");
const lucia = new Humano("Lucia");
const pedro = new Humano("Pedro");

joao.setMediator(salaDeChat1);
maria.setMediator(salaDeChat1);
paulo.setMediator(salaDeChat1);

lucia.setMediator(salaDeChat2);
pedro.setMediator(salaDeChat2);

console.log(chalk.red("[Sala 1] João envia sua primeira mensagem"));
joao.enviar("Olá pessoal da sala 1, tudo bem?");

console.log(chalk.red("\n[Sala 2] Lucia envia sua primeira mensagem"));
lucia.enviar("Olá Pedro, tudo bem?");

console.log(chalk.red("\n[Sala 1] Paulo responde a João"));
paulo.enviar("Tudo bem comigo!");

console.log(
  chalk.red("\n[Sala 1] Paulo tenta enviar duas mensagem consecutivas")
);
paulo.enviar("E com vocês?");

console.log(
  chalk.red("\n[Sala 2] Pedro não responde, Lucia tenta enviar outra mensagem")
);
lucia.enviar("Pedro, vc ta ai?");

console.log(chalk.red("\nLucia troca de sala de chat"));
lucia.setMediator(salaDeChat1);

console.log(chalk.red("[Sala 1] Lucia envia sua primeira mensagem na sala 1"));
lucia.enviar("Olá pessoal da sala 1, sou a Lucia. Tudo bem?");

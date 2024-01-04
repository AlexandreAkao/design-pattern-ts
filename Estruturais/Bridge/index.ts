import { Email } from "./Email";
import { MensagemAdmin } from "./MensagemAdmin";
import { MensagemUsuario } from "./MensagemUsuario";
import { SMS } from "./SMS";

let canalEnvio = new Email();

let mensagem = new MensagemAdmin(canalEnvio);
mensagem.setAssunto("Primeira mensagem");
mensagem.setMensagem("Olá Usuário");
mensagem.enviar();

mensagem = new MensagemUsuario(canalEnvio);
mensagem.setAssunto("Primeira mensagem");
mensagem.setMensagem("Olá Administrador");
mensagem.enviar();

canalEnvio = new SMS();

mensagem = new MensagemAdmin(canalEnvio);
mensagem.setAssunto("Segunda mensagem");
mensagem.setMensagem("Olá Usuário");
mensagem.enviar();

mensagem = new MensagemUsuario(canalEnvio);
mensagem.setAssunto("Segunda mensagem");
mensagem.setMensagem("Olá Administrador");
mensagem.enviar();

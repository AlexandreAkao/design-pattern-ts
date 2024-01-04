import { ChatBot } from "./ChatBot";
import { SalaDeChatMediatorInterface } from "./SalaDeChatMediatorInterface";
import { Usuario } from "./Usuario";

export class SalaDeChatMediator implements SalaDeChatMediatorInterface {
  private usuarios: Usuario[];
  private chatBot: ChatBot;
  private nome: string;

  constructor(chatbot: ChatBot, nome: string) {
    this.usuarios = [];
    this.chatBot = chatbot;
    this.chatBot.setMediator(this);
    this.nome = nome;
  }

  enviarMensagem(mensagem: string, usuario: Usuario): void {
    if (this.chatBot.validarMensagem(usuario)) {
      for (const u of this.usuarios) {
        if (u !== usuario) {
          u.receber(mensagem);
        }
      }
      console.log("-------------------------");
    }
  }
  adicionarUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }
  removerUsuario(usuario: Usuario): void {
    const index = this.usuarios.findIndex((u) => u === usuario);
    this.usuarios.splice(index, 1);
  }
  getNome(): string {
    return this.nome;
  }
}

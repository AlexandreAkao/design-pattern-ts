import { Usuario } from "./Usuario";

export class ChatBot extends Usuario {
  private ultimoUsuario: Usuario;

  constructor() {
    super("CHATBOT");
    this.ultimoUsuario = this;
  }

  enviar(mensagem: string): void {
    console.log(`## ${this.getNome()} enviou: ${mensagem} ##`);
    console.log("------------");
    this.mediator.enviarMensagem(mensagem, this);
  }
  receber(mensagem: string): void {
    console.log(`${this.getNome()} recebeu: ${mensagem}`);
  }

  validarMensagem(usuario: Usuario): boolean {
    if (this.ultimoUsuario === usuario) {
      this.enviar(`Uma mensagem de ${usuario.getNome()} foi negada!`);
      return false;
    }
    if (usuario !== this) {
      this.ultimoUsuario = usuario;
    }
    return true;
  }
}

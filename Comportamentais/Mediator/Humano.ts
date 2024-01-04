import { Usuario } from "./Usuario";

export class Humano extends Usuario {
  enviar(mensagem: string): void {
    console.log(`-------${this.mediator.getNome()}-------`);
    console.log(`${this.getNome()} enviou: ${mensagem}`);
    console.log("------------");
    this.mediator.enviarMensagem(mensagem, this);
  }

  receber(mensagem: string): void {
    console.log(`${this.getNome()} recebeu: ${mensagem}`);
  }
}

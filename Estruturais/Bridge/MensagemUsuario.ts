import { Mensagem } from "./Mensagem";

export class MensagemUsuario extends Mensagem {
  public enviar() {
    console.log("Mensagem enviada pelo USUÁRIO");
    this.canal.enviarMensagem(this.assunto, this.mensagem);
  }
}

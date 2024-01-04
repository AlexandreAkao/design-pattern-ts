import { Mensagem } from "./Mensagem";

export class MensagemAdmin extends Mensagem {
  public enviar() {
    console.log("Mensagem enviada pelo ADMINISTRADOR");
    this.canal.enviarMensagem(this.assunto, this.mensagem);
  }
}

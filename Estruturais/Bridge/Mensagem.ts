import { CanalDeEnvioInterface } from "./CanalDeEnvioInterface";

export abstract class Mensagem {
  protected assunto: string;
  protected mensagem: string;
  protected canal: CanalDeEnvioInterface;

  constructor(canalDeEnvio: CanalDeEnvioInterface) {
    this.canal = canalDeEnvio;
  }

  public setAssunto(assunto: string): void {
    this.assunto = assunto;
  }

  public setMensagem(mensagem: string): void {
    this.mensagem = mensagem;
  }

  public abstract enviar(): void;
}

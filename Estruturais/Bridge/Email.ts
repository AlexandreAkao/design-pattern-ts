import { CanalDeEnvioInterface } from "./CanalDeEnvioInterface";

export class Email implements CanalDeEnvioInterface {
  enviarMensagem(assunto: string, mensagem: string): void {
    console.log("=== Mensagem Enviada por E-MAIL ===");
    console.log(`ASSUNTO: ${assunto}`);
    console.log("-----------------");
    console.log(`MENSAGEM: ${mensagem}\n\n`);
  }
}

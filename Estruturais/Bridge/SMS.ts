import { CanalDeEnvioInterface } from "./CanalDeEnvioInterface";

export class SMS implements CanalDeEnvioInterface {
  enviarMensagem(assunto: string, mensagem: string): void {
    console.log("=== Mensagem Enviada por SMS ===");
    console.log(`ASSUNTO: ${assunto}`);
    console.log("-----------------");
    console.log(`MENSAGEM: ${mensagem}\n\n`);
  }
}

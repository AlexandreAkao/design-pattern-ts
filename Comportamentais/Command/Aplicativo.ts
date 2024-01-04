import { Command } from "./Command";

export class Aplicativo {
  private comandos: Command[] = [];

  setComando(comando: Command): number {
    this.comandos.push(comando);

    return this.comandos.length - 1;
  }

  aoPrecionarBotao(id: number) {
    this.comandos[id].executar();
  }

  duploCliqueBotao(id: number) {
    this.comandos[id].desfazer();
  }

  getComando(id: number) {
    return this.comandos[id];
  }
}

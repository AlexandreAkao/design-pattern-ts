import { Command } from "./Command";
import { ArCondicionado } from "./Fabricante/ArCondicionado";

export class DesligarArCondicionado implements Command {
  private arCondicionado: ArCondicionado;

  constructor(arCondicionado: ArCondicionado) {
    this.arCondicionado = arCondicionado;
  }

  executar(): void {
    this.arCondicionado.desligar();
    this.arCondicionado.imprimeObjeto();
  }
  desfazer(): void {
    this.arCondicionado.ligar();
    this.arCondicionado.imprimeObjeto();
  }
}

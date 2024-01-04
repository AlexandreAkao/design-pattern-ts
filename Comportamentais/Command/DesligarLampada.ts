import { Command } from "./Command";
import { Lampada } from "./Fabricante/Lampada";

export class DesligarLampada implements Command {
  private lampada: Lampada;

  constructor(lampada: Lampada) {
    this.lampada = lampada;
  }

  executar(): void {
    this.lampada.desligar();
    this.lampada.imprimeObjeto();
  }
  desfazer(): void {
    this.lampada.ligar();
    this.lampada.imprimeObjeto();
  }
}

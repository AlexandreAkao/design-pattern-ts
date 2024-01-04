import { Command } from "./Command";
import { ArCondicionado } from "./Fabricante/ArCondicionado";

export class MudarTemperaturaArCondicionado implements Command {
  private arCondicionado: ArCondicionado;
  private temperatura: number;
  private temperaturaAnterior: number;

  constructor(arCondicionado: ArCondicionado) {
    this.arCondicionado = arCondicionado;
    this.temperatura = arCondicionado.getTemperatura();
    this.temperaturaAnterior = arCondicionado.getTemperatura();
  }

  setTemperatura(temperatura: number) {
    this.temperaturaAnterior = this.temperatura;
    this.temperatura = temperatura;
  }

  executar(): void {
    this.arCondicionado.setTemperatura(this.temperatura);
    this.arCondicionado.imprimeObjeto();
  }
  desfazer(): void {
    this.arCondicionado.setTemperatura(this.temperaturaAnterior);
    this.arCondicionado.imprimeObjeto();
  }
}

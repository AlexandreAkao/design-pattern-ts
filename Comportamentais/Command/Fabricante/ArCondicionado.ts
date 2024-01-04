export class ArCondicionado {
  private identificacao: string;
  private estado: boolean;
  private temperatura: number;

  constructor(identificacao: string, estado: boolean, temperatura: number) {
    this.estado = estado;
    this.identificacao = identificacao;
    this.temperatura = temperatura;
  }

  public ligar() {
    this.estado = true;
  }

  public desligar() {
    this.estado = false;
  }

  public setTemperatura(temperatura: number): void {
    this.temperatura = temperatura;
  }

  public getIdentificacao(): string {
    return this.identificacao;
  }

  public getEstado(): boolean {
    return this.estado;
  }

  public getTemperatura(): number {
    return this.temperatura;
  }

  public imprimeObjeto(): void {
    let identificao = `O objeto ${this.identificacao} está `;
    identificao += this.estado ? "Ligado" : "Desligado";
    identificao += this.estado ? ` a ${this.temperatura} graus celsius.` : ".";
    console.log(identificao);
  }
}

export class Lampada {
  private identificacao: string;
  private estado: boolean;

  constructor(identificacao: string, estado: boolean) {
    this.estado = estado;
    this.identificacao = identificacao;
  }

  public ligar(): void {
    this.estado = true;
  }

  public desligar(): void {
    this.estado = false;
  }

  public getIdentificacao(): string {
    return this.identificacao;
  }

  public getEstado(): boolean {
    return this.estado;
  }

  public imprimeObjeto() {
    let identificao = `O objeto ${this.identificacao} está `;
    identificao += this.estado ? "Ligado." : "Desligado.";
    console.log(identificao);
  }
}

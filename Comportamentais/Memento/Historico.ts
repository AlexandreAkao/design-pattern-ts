import { MementoInterface } from "./MementoInterface";
import { OriginadorInterface } from "./OriginadorInterface";

export class Historico {
  private historico: MementoInterface[] = [];

  public criarCheckPoint(originador: OriginadorInterface): void {
    this.historico.push(originador.salvar());
  }

  public desfazer(): void {
    if (this.historico.length === 0) {
      return;
    }

    const memento = this.historico.pop();
    memento?.restaurar();
  }

  public imprimir(originador: OriginadorInterface): void {
    originador.imprimir();
  }
}

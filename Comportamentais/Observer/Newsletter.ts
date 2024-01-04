import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class Newsletter implements Subject {
  private observers: Observer[] = []
  private mensagens: string[] = []

  registerObserver(o: Observer): void {
    this.observers.push(o)
  }
  removeObserver(o: Observer): void {
    for (const [index, observer] of this.observers.entries()) {
      if (observer === o) {
        this.observers.splice(index, 1);
      }
    }
  }
  notifyObservers(): void {
    for (const o of this.observers) {
      const lastMensagem = this.mensagens.at(-1) ?? '';
      o.update(lastMensagem);
    }
  }

  addMensagem(mensagem: string): void {
    this.mensagens.push(mensagem);
    this.notifyObservers()
  }
}
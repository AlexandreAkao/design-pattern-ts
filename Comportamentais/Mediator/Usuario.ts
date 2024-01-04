import { SalaDeChatMediatorInterface } from "./SalaDeChatMediatorInterface";

export abstract class Usuario {
  protected mediator: SalaDeChatMediatorInterface;
  protected nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  setMediator(mediator: SalaDeChatMediatorInterface) {
    if (this.mediator) {
      this.mediator.removerUsuario(this);
    }
    this.mediator = mediator;
    this.mediator.adicionarUsuario(this);
  }

  getNome(): string {
    return this.nome;
  }

  abstract enviar(mensagem: string): void;

  abstract receber(mensagem: string): void;
}

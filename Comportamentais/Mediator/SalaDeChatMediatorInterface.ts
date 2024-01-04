import { Usuario } from "./Usuario";

export interface SalaDeChatMediatorInterface {
  enviarMensagem(mensagem: string, usuario: Usuario): void;
  adicionarUsuario(usuario: Usuario): void;
  removerUsuario(usuario: Usuario): void;
  getNome(): string;
}

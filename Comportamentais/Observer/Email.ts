import { Observer } from "./Observer";

export class Email {
  static enviarEmail(observer: Observer, mensagem: string) {
    console.log("-------------------------------------------------")
    console.log(`Email enviado para ${observer.getNome()} - ${observer.getEmail()}`)
    console.log(`Mensagem: ${mensagem}`);
  }
}
import { Gateway } from "./Gateway";

export class Cobranca {
  private gateway: Gateway;

  constructor(gateway: Gateway) {
    this.gateway = gateway;
  }

  public setGateway(gateway: Gateway) {
    this.gateway = gateway;
  }

  public setValor(valor: number) {
    this.gateway.setValor(valor);
  }

  public setParcelas(parcelas: number) {
    this.gateway.setParcelas(parcelas);
  }

  public setNumeroCartao(numeroCartao: string) {
    this.gateway.setNumeroCartao(numeroCartao);
  }

  public setCVV(cvv: string) {
    this.gateway.setCVV(cvv);
  }

  public realizarPagamento(): boolean {
    //Verifica se cartao é válido
    if (this.gateway.validarCartao()) {
      //retorna se o pagamento foi realizado com sucesso
      return this.gateway.realizarPagamento();
    }

    return false;
  }
}
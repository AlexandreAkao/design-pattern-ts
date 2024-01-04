import { AguardandoPagamentoState } from "./AguardandoPagamentoState";
import { CanceladoState } from "./CanceladoState";
import { EnviadoState } from "./EnviadoState";
import { PagoState } from "./PagoState";
import { State } from "./State";

export class Pedido {
  private aguardandoPagamento: State;
  private pago: State;
  private cancelado: State;
  private enviado: State;
  private estadoAtual: State;

  constructor() {
    this.aguardandoPagamento = new AguardandoPagamentoState(this)
    this.pago = new PagoState(this)
    this.cancelado = new CanceladoState(this)
    this.enviado = new EnviadoState(this)
    this.estadoAtual = this.aguardandoPagamento
  }

  realizarPagamento() {
    this.estadoAtual.sucessoAoPagar();
  }

  cancelarPedido() {
    this.estadoAtual.cancelarPedido();
  }

  despacharPedido() {
    try {
      this.estadoAtual.despacharPedido();
    } catch (error) {
      if (error instanceof Error){
        console.log(error.message)
      }
    }
  }

  public setEstadoAtual(estado: State) {
    this.estadoAtual = estado;
  }

  public getAguardandoPagamento(): State {
    return this.aguardandoPagamento;
  }
  
  public getPago(): State {
    return this.pago;
  }
  
  public getCancelado(): State {
    return this.cancelado;
  }
  
  public getEnviado(): State {
    return this.enviado;
  }
}
export interface Gateway {
  setValor(valor: number): void
  setParcelas(parcelas: number): void
  setNumeroCartao(numeroCartao: string): void
  setCVV(cvv: string): void
  validarCartao(): boolean
  realizarPagamento(): boolean
}
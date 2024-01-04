export class PagFacil {
  private valor: number
  private parcelas: number
  private numeroCartao: string
  private cvv: string

  public setValor(valor: number) {
    this.valor = valor;
  }

  public setParcelas(parcelas: number) {
    this.parcelas = parcelas;
  }

  public setNumeroCartao(numeroCartao: string) {
    this.numeroCartao = numeroCartao;
  }

  public setCVV(cvv: string) {
    this.cvv = cvv;
  }

  public validarCartao(): boolean {
    return this.numeroCartao !== "" &&
    this.cvv !== "" &&
    this.cvv.length === 3
  }

  public realizarPagamento(): boolean {
    console.log('Pagamento realizado via PagFacil')
    return true;
  }
}
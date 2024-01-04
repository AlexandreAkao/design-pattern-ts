export class TopPagamentos {
  private valor: number;
  private parcelas: number;
  private numeroCartao: string;
  private cvv: string;

  public setValorTotal(valor: number) {
    this.valor = valor;
  }

  public setQuantidadeParcelas(parcelas: number) {
    this.parcelas = parcelas;
  }

  public setCartao(numeroCartao: string, cvv: string) {
    this.numeroCartao = numeroCartao;
    this.cvv = cvv;
  }

  public realizarPagamento(): boolean {
    console.log('Pagamento realizado via TopPagamentos')
    return true;
  }
}
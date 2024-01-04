export abstract class Pizza {
  protected descricao: string = "Descrição não definida";
  protected preco: number;

  public abstract getDescricao(): string

  public abstract getPreco(): number
}
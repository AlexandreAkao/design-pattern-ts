export class Consumidor {
  private nome: string;
  private cpf: string;
  private email: string;

  constructor(nome: string, cpf: string, email: string) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
  }

  public getNome(): string {
    return this.nome;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getEmail(): string {
    return this.email;
  }
}

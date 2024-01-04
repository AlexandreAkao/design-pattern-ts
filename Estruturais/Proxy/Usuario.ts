import { PessoaFisicaReceitaFederalProxy } from "./PessoaFisicaReceitaFederalProxy";
import { ReceitaFederalInterface } from "./ReceitaFederalInterface";

export class Usuario {
  private nome: string;
  private cpf: string;
  private idade: number;
  private pessoaFisica: ReceitaFederalInterface;

  public constructor(nome: string, cpf: string, idade: number) {
    this.nome = nome;
    this.cpf = cpf;
    this.idade = idade;
    this.pessoaFisica = new PessoaFisicaReceitaFederalProxy(cpf);
  }

  public async validarNome(): Promise<boolean> {
    return this.nome === (await this.pessoaFisica.getNome());
  }

  public async VerificaCPFAtivo(): Promise<boolean> {
    return await this.pessoaFisica.CPFAtivo();
  }

  public async verificarMaioridade(): Promise<boolean> {
    return (
      this.idade >= 18 && this.idade === (await this.pessoaFisica.getIdade())
    );
  }

  public getNome(): string {
    return this.nome;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getIdade(): number {
    return this.idade;
  }
}

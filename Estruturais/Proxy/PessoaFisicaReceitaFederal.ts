import { ReceitaFederalInterface } from "./ReceitaFederalInterface";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export class PessoaFisicaReceitaFederal implements ReceitaFederalInterface {
  private nome: string;
  private cpf: string;
  private idade: number;
  private cpfAtivo: boolean;

  /**
   * PessoaFisicaReceitaFederal constructor.
   * @param cpf string
   */
  public constructor(cpf: string) {
    this.cpf = cpf;
    this.nome = "João da Silva";
    this.idade = 25;
    this.cpfAtivo = true;
  }

  static async build(cpf: string) {
    await sleep(5000);
    console.log("PessoaFisicaReceitaFederal criada com sucesso");
    return new PessoaFisicaReceitaFederal(cpf);
  }

  public async getNome(): Promise<string> {
    await sleep(2000);
    return this.nome;
  }

  /**
   * @return int
   */
  public async getIdade(): Promise<number> {
    await sleep(2000);
    return this.idade;
  }

  /**
   * @return boolean
   */
  public async CPFAtivo(): Promise<boolean> {
    await sleep(3000);
    return this.cpfAtivo;
  }
}

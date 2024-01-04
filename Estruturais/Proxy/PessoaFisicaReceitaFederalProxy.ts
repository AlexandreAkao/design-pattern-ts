import { PessoaFisicaReceitaFederal } from "./PessoaFisicaReceitaFederal";
import { ReceitaFederalInterface } from "./ReceitaFederalInterface";

export class PessoaFisicaReceitaFederalProxy
  implements ReceitaFederalInterface
{
  private cpf: string;
  private pessoaFisicaRF: ReceitaFederalInterface;

  public constructor(cpf: string) {
    this.cpf = cpf;
  }

  private async criarPessoaFisicaReceitaFederal(): Promise<void> {
    if (this.pessoaFisicaRF === undefined) {
      this.pessoaFisicaRF = await PessoaFisicaReceitaFederal.build(this.cpf);
    }
  }

  async getNome(): Promise<string> {
    await this.criarPessoaFisicaReceitaFederal();
    return await this.pessoaFisicaRF.getNome();
  }
  async getIdade(): Promise<number> {
    await this.criarPessoaFisicaReceitaFederal();
    return await this.pessoaFisicaRF.getIdade();
  }
  async CPFAtivo(): Promise<boolean> {
    await this.criarPessoaFisicaReceitaFederal();
    return await this.pessoaFisicaRF.CPFAtivo();
  }
}

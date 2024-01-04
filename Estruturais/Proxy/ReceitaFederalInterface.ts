export interface ReceitaFederalInterface {
  // new (cpf: string): ReceitaFederalInterface;
  getNome(): Promise<string>;
  getIdade(): Promise<number>;
  CPFAtivo(): Promise<boolean>;
}

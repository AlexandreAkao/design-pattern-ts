export interface Observer {
  update(mensagem: string): void;
  getNome(): string;
  getEmail(): string;
}
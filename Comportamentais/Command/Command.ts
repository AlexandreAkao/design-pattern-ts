export interface Command {
  executar(): void;
  desfazer(): void;
}

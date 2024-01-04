export interface Expressao {
  interpretar(contexto: Record<string, number>): number;
}

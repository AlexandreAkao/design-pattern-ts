import { MementoInterface } from "./MementoInterface";

export interface OriginadorInterface {
  salvar(): MementoInterface;
  imprimir(): void;
}

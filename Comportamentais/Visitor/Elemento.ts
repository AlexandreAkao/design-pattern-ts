import { Visitor } from "./Visitor";

export interface Elemento {
  aceitar(visitor: Visitor): number;
}

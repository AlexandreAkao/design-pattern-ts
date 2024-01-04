import { Iterator } from "./Iterator";

export interface Agregado {
  createIterator(): Iterator;
}

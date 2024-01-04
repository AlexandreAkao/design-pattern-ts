import { Departamento } from "./Departamento";
import { Produto } from "./Produto";
import { Supermercado } from "./Supermercado";

export interface Visitor {
  visitSupermercado(supermercado: Supermercado): number;
  visitDepartamento(departamento: Departamento): number;
  visitProduto(produto: Produto): number;
}

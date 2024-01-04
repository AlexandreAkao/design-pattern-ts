import { Departamento } from "./Departamento";
import { Produto } from "./Produto";
import { Supermercado } from "./Supermercado";
import { Visitor } from "./Visitor";

export class Lucratividade implements Visitor {
  visitSupermercado(supermercado: Supermercado): number {
    let lucratividade = 0;
    const departamentos = supermercado.getDepartamentos();

    for (const departamento of departamentos) {
      const produtos = departamento.getProdutos();

      for (const produto of produtos) {
        lucratividade += this.calculaLucratividadeProduto(produto);
      }
    }

    return lucratividade;
  }

  visitDepartamento(departamento: Departamento): number {
    let lucratividade = 0;
    const produtos = departamento.getProdutos();

    for (const produto of produtos) {
      lucratividade += this.calculaLucratividadeProduto(produto);
    }

    return lucratividade;
  }
  visitProduto(produto: Produto): number {
    return this.calculaLucratividadeProduto(produto);
  }

  private calculaLucratividadeProduto(produto: Produto): number {
    return (produto.getPreco() * produto.getMargemLucro()) / 100;
  }
}

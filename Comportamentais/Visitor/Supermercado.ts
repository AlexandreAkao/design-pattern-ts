import { Departamento } from "./Departamento";
import { Elemento } from "./Elemento";
import { Visitor } from "./Visitor";

export class Supermercado implements Elemento {
  private nome: string;
  private departamentos: Departamento[] = [];

  public constructor(nome: string) {
    this.nome = nome;
  }

  public addDepartamento(departamento: Departamento) {
    this.departamentos.push(departamento);
  }

  public getNome(): string {
    return this.nome;
  }

  public getDepartamentos(): Departamento[] {
    return this.departamentos;
  }

  aceitar(visitor: Visitor): number {
    return visitor.visitSupermercado(this);
  }
}

import { Conexao } from "./Conexao";

export class MySql implements Conexao {
  private static instance?: MySql;
  private host: string;
  private user: string;
  private password: string;

  private constructor() {
    this.host = "mysql:host=localhost;dbname=bancoDeDados";
    this.user = "pedrosilva";
    this.password = "pedro123";
  }

  public executeQuery(query: string): null {
    console.log("A query: ");
    console.log(query);
    console.log("foi executada com sucesso");
    return null;
  }

  public setHost(host: string): void {
    this.host = host;
  }

  public setUser(user: string): void {
    this.user = user;
  }

  public setPassword(password: string): void {
    this.password = password;
  }

  public toString(): string {
    const saida = {
      host: this.host,
      user: this.user,
      password: this.password,
    };

    return JSON.stringify(saida);
  }

  static getInstance() {
    if (this.instance === undefined) {
      this.instance = new MySql();
    }

    return this.instance;
  }
}

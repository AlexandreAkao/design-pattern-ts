import { MySql } from "./MySql";

const bancoMySql1 = MySql.getInstance();

const query = `CREATE TABLE usuario (
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(60),
  senha VARCHAR(100)
)`;

bancoMySql1.executeQuery(query);

console.log("==== bancoMySql1 ====");
console.log(bancoMySql1.toString());

const bancoMySql2 = MySql.getInstance();

console.log("\n==== bancoMySql2 ====");
console.log(bancoMySql2.toString());

console.log("\n==== MUDANÇA DE USUÁRIO EM bancoMySql1 ====");
bancoMySql1.setUser("mariaDaSilva");

console.log("\n==== bancoMySql1 ====");
console.log(bancoMySql1.toString());

console.log("\n==== bancoMySql2 ====");
console.log(bancoMySql2.toString());

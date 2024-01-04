import { GerenciadorDePrototipos } from "./GerenciadorDePrototipos";
import { Livro } from "./Livro";

const gerenciadorDePrototipos = new GerenciadorDePrototipos();
const livroPrototipo = gerenciadorDePrototipos.getInstance("livro");
const livro1 = livroPrototipo.clone() as Livro;

console.log("==== Livro 1 ====");
console.log("\n==== Livro 1 com valores padrão. ====");
console.log(livro1);

livro1.setNome("Livro 1");
livro1.setAutor("Lucas da Silva");
livro1.setNumeroPaginas(325);

console.log("==== Livro 1 com valores editados. ====");
console.log(livro1);

const livro2 = livroPrototipo.clone() as Livro;

console.log("\n==== Livro 2 com valores padrão. ====");
console.log(livro2);

livro2.setNome("Livro 2");
livro2.setAutor("Marlene dos Santos");
livro2.setNumeroPaginas(420);

console.log("==== Livro 1 e 2 com valores editados. ====");
console.log(livro1);
console.log(livro2);

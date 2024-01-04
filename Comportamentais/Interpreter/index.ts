import { Adicao } from "./Adicao";
import { Digito } from "./Digito";
import { Divisao } from "./Divisao";
import { Multiplicacao } from "./Multiplicacao";
import { Numero } from "./Numero";
import { Parser } from "./Parser";
import { Subtracao } from "./Subtracao";
import { Variavel } from "./Variavel";

const arvore = new Subtracao(
  new Subtracao(
    new Adicao(new Numero(new Digito("5")), new Numero(new Digito("9"))),
    new Variavel("x")
  ),
  new Divisao(
    new Subtracao(
      new Multiplicacao(
        new Numero(new Digito("2"), new Numero(new Digito("0"))),
        new Numero(new Digito("2"))
      ),
      new Numero(new Digito("1"), new Numero(new Digito("0")))
    ),
    new Variavel("y")
  )
);

const contexto = {
  x: 2,
  y: 3,
};

console.log(arvore.interpretar(contexto));

const parser = new Parser("9 5 + x - 20 2 * 10 - y / -");

const arvoreParser = parser.parse();

console.log(arvoreParser.interpretar(contexto));

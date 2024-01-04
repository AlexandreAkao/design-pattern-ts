import { Plantacao } from "./Plantacao";

function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const iteracoes = 10;

const plantacao = new Plantacao();

for (let i = 0; i < iteracoes; i++) {
  plantacao.addArvore(rand(0, 500), rand(0, 500), "Ipê", "#2caf1e", 10);
  plantacao.addArvore(rand(0, 500), rand(0, 500), "Palmeira", "#008a29", 7);
  plantacao.addArvore(
    rand(0, 500),
    rand(0, 500),
    "Jabuticabeira",
    "#00b626",
    5
  );
}

console.log("### Especies ###");
console.log(plantacao.retornaEspecies());

console.log("\n\n### Árvores ###");
console.log(plantacao.retornaArvores());

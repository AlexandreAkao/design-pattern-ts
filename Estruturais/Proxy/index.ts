import { Usuario } from "./Usuario";

const inicio = Date.now();
console.log(inicio);
//Criação do Usuário
const pessoaFisica = new Usuario("João da Silva", "08844341921", 25);
pessoaFisica.validarNome().then((value) => {
  console.log(value);
  const final = Date.now();
  console.log(`# ${Math.round((final - inicio) / 1000)} Segundos`);
});

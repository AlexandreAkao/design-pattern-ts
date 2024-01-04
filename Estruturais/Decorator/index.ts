import { BordaRequeijao } from "./BordaRequeijao";
import { MassaIntegral } from "./MassaIntegral";
import { PizzaQueijo } from "./PizzaQueijo";

const pizzaQueijo = new PizzaQueijo();

console.log("Descrição", pizzaQueijo.getDescricao());
console.log("Preço", pizzaQueijo.getPreco());

const pizzaQueijoBordaRequeijao = new BordaRequeijao(pizzaQueijo);
console.log("----------------------------------------");
console.log("Descrição", pizzaQueijoBordaRequeijao.getDescricao());
console.log("Preço", pizzaQueijoBordaRequeijao.getPreco());

const pizzaQueijoBordaRequeijaoMassaIntegral = new MassaIntegral(
  pizzaQueijoBordaRequeijao
);
console.log("----------------------------------------");
console.log("Descrição", pizzaQueijoBordaRequeijaoMassaIntegral.getDescricao());
console.log("Preço", pizzaQueijoBordaRequeijaoMassaIntegral.getPreco());

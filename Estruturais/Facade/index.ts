import { Consumidor } from "./Consumidor";
import { Produto } from "./Produto";
import { VendaFacade } from "./Vendas/VendaFacade";

const consumidor = new Consumidor(
  "Luiz da Silva",
  "12345678910",
  "luiz@email.com"
);

const produto1 = new Produto("Blusa Rosa", "Blusa feminina rosa", 80.99);
const produto2 = new Produto(
  "Camiseta Preta",
  "Camiseta masculina preta",
  49.9
);
const produto3 = new Produto("Calça Jeans", "Calça Jeans Masculina", 119.9);

const vendaFacade = new VendaFacade(consumidor);

vendaFacade.addProduto(produto1);
vendaFacade.addProduto(produto2);
vendaFacade.addProduto(produto3);

vendaFacade.pedidoBoleto();

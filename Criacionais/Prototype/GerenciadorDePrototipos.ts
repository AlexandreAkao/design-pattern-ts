import { Livro } from "./Livro";
import { Prototype } from "./Prototype";
import { Revista } from "./Revista";
import { Trabalho } from "./Trabalho";

type PrototiposTypes = "livro" | "revista" | "trabalho";

export class GerenciadorDePrototipos {
  private prototipos: Record<
    PrototiposTypes,
    Prototype<Livro | Revista | Trabalho>
  >;

  constructor() {
    const livro = new Livro();
    livro.setNome("Desconhecido");
    livro.setAutor("Desconhecido");
    livro.setNumeroPaginas(0);

    const revista = new Revista();
    revista.setNome("Desconhecido");
    revista.setEdicao(0);

    const trabalho = new Trabalho();
    trabalho.setNome("Desconhecido");
    trabalho.setAutor("Desconhecido");
    trabalho.setTipo("Desconhecido");

    this.prototipos = {
      livro: livro,
      revista: revista,
      trabalho: trabalho,
    };
  }

  getInstance(indentificador: PrototiposTypes) {
    return this.prototipos[indentificador];
  }
}

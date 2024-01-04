export class Gateway {
  public cobrar(valor: number): boolean {
    console.log(valor)

    const respostas = [true, false]
    return respostas[Math.round(Math.random())]
  }
}
import { ClassePai } from "./classePai";

export class ClasseFilha extends ClassePai{
  constructor() {
    super()
}

  funcaoFilha(msg: string = 'Classe Filha') {
    super.funcao(msg)
  }
}

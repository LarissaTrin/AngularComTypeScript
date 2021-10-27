export class ClasseGenerica<T> {
  atributo:T;
  constructor(at:T){
    this.atributo = at;
  }
  funcao(){
    console.log('atributo',this.atributo)
    console.log('tipo: ',typeof(this.atributo))
  }
  valido<T>(arg: T) {
    return arg;
  }
}

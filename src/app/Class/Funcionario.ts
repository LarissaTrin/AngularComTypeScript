export class Funcionario {
  private nome: string;

  constructor(nome:string){
    this.nome = nome;
  }
  seApresentar (){
    return "Oi, meu nome é " + this.nome;
  }

}

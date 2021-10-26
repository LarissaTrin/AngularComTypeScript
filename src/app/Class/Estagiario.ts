import { Funcionario } from "./Funcionario";

export class Estagiario extends Funcionario{
  constructor (nome:string){
    super(nome);
    }
    seApresentar():string{
      return super.seApresentar + " e eu sou estagiário.";
    }
}

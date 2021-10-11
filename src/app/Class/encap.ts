export class Encap {
  constructor() {
    this.nome = 'privado';
}
  private nome:string;

  funcao() {
    console.log('nome esta privado',this.nome)
  }
}

export class Encap {
  constructor() {
    this.nome = 'privado';
    this.varPublic = 'public';
}
  private nome:string;
  public varPublic: string;

  funcao() {
    console.log('nome esta privado',this.nome)
  }
}

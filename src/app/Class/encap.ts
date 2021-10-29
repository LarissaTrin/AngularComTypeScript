export class Encap {
  constructor() {
    this.nome = 'privado';
    this.varPublic = 'public';
    this.varProtect = 'protegido';
}
  private nome:string;
  public varPublic: string;
  protected varProtect: string;

  funcao() {
    console.log('nome esta privado',this.nome)
  }
}

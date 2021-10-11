import { Component, OnInit } from '@angular/core';
import { Encap } from '../Class/encap';

@Component({
  selector: 'app-encapsulamento',
  templateUrl: './encapsulamento.component.html',
  styleUrls: ['./encapsulamento.component.scss']
})
export class EncapsulamentoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.funcaoPrivada()

    let encap = new Encap
    encap.funcao();
  }

  private funcaoPrivada() {
    console.log('funcao Privada')
  }

  funcaoPublic() {
    console.log("funcaoPublic acessada");
  }
}

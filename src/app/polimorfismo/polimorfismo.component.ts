import { Component, OnInit } from '@angular/core';
import { Estagiario } from '../Class/Estagiario';

@Component({
  selector: 'app-polimorfismo',
  templateUrl: './polimorfismo.component.html',
  styleUrls: ['./polimorfismo.component.scss']
})
export class PolimorfismoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  coercao() {
    console.log('Coerção')
    let dog = 1 + ' cao'
    console.log(dog)
    console.log(typeof(dog))
  }

  sobrecarga(base: number, altura?: number) {
    console.log('Sobrecarga')
    //Calcula área do quadrado       base*base
    //Calcula área do triangulo      base*altura / 2
    //Calculo de área
    if(altura == undefined) console.log('Area do quadrado:',base*base);
    else console.log('Area do triangulo:', base*altura/2);
  }

  parametrico() {}

  inclusao() {
    let estagiario = new Estagiario('Patricia');
    let x = estagiario.seApresentar()
    console.log(x)
  }

}

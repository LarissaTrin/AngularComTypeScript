import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anomalia-ts',
  templateUrl: './anomalia-ts.component.html',
  styleUrls: ['./anomalia-ts.component.scss']
})
export class AnomaliaTSComponent implements OnInit {

  a = 5
  b = ['oi','ola']

  constructor() { }

  ngOnInit(): void {
    console.log('Variáveis iniciais')
    let c = this.a
    let d = this.b

    console.log('a: ',this.a)
    console.log('b: ',this.b)
    console.log('c: ',c)
    console.log('d: ',d)

    console.log('ANOMALIa')
    this.a = 10
    this.b.push('teste')

    console.log('a: ',this.a)
    console.log('b: ',this.b)
    console.log('c: ',c)
    console.log('d: ',d)

    d = this.b.slice()
    this.b.push('okay')
    console.log('Anomalia Corrigida')
    console.log('b: ',this.b)
    console.log('d: ',d)
  }

}

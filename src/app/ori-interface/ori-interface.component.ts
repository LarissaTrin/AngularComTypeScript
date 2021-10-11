import { Component, OnInit } from '@angular/core';
import { CasseInterface } from '../Class/casseInterface';

@Component({
  selector: 'app-ori-interface',
  templateUrl: './ori-interface.component.html',
  styleUrls: ['./ori-interface.component.scss']
})
export class OriInterfaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let inter = new CasseInterface;

    console.log(inter.atributo2)
    inter.atributo2 = 4
    console.log(inter.atributo2)

  }

}

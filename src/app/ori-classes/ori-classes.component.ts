import { Component, OnInit } from '@angular/core';
import { Numeros } from '../Class/numeros';

@Component({
  selector: 'app-ori-classes',
  templateUrl: './ori-classes.component.html',
  styleUrls: ['./ori-classes.component.scss']
})
export class OriClassesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let classe = new Numeros;
    console.log(classe)
    classe.primeiro = 4;
    classe.segundo = 6;
    console.log(classe)
    classe.funcao();
  }
}

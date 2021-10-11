import { Component, OnInit } from '@angular/core';
import { ClasseFilha } from '../Class/classeFilha';
import { ClassePai } from '../Class/classePai';

@Component({
  selector: 'app-heranca',
  templateUrl: './heranca.component.html',
  styleUrls: ['./heranca.component.scss']
})
export class HerancaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let classePai = new ClassePai;
    let classeFilha = new ClasseFilha;

    classePai.nome = "Pai"
    classeFilha.nome = "Filha"
    console.log(classePai)
    console.log(classeFilha)
    classePai.funcao()
    classeFilha.funcao()
    classeFilha.funcaoFilha()
  }

}

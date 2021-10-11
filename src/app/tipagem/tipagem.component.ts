import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipagem',
  templateUrl: './tipagem.component.html',
  styleUrls: ['./tipagem.component.scss']
})
export class TipagemComponent implements OnInit {

  tipagem = 0;
  tipoAny: any;

  constructor() { }

  ngOnInit(): void {

    console.log("tipagem",this.tipagem, ' = ', typeof(this.tipagem))
    this.tipoAny = 'oi';
    console.log("tipoAny",this.tipoAny, ' = ', typeof(this.tipoAny))
    this.tipoAny = 0;
    console.log("tipoAny",this.tipoAny, ' = ', typeof(this.tipoAny))
  }
}

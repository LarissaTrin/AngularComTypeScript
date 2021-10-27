import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-anomalia-filha',
  templateUrl: './anomalia-filha.component.html',
  styleUrls: ['./anomalia-filha.component.scss']
})
export class AnomaliaFilhaComponent implements OnInit {

  @Input() arr: any;
  @Input() name?: string;
  test: any;

  constructor() { }

  ngOnInit() {
    this.test = this.arr.slice()
  }

  btnClicked(){
    this.name = 'Changed '+ this.name;
    //this.test = this.arr.slice()
    this.test.push("Mumbai");
  }
}

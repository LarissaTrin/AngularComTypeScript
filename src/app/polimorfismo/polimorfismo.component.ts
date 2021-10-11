import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polimorfismo',
  templateUrl: './polimorfismo.component.html',
  styleUrls: ['./polimorfismo.component.scss']
})
export class PolimorfismoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let dog = 1 + ' cao'
    console.log(dog)
    console.log(typeof(dog))
  }

}

import { Component, OnInit } from '@angular/core';
import { Animal } from '../Class/animal';
import { Gato } from '../Class/gato';

@Component({
  selector: 'app-abs-class',
  templateUrl: './abs-class.component.html',
  styleUrls: ['./abs-class.component.scss']
})
export class AbsClassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //let animal = new Animal('malu')
    let gato = new Gato('Marri')
    gato.move()
    console.log('Falou:',gato.makeSound(''))
  }

}

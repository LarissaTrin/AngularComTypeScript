import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-anomalia-angular',
  templateUrl: './anomalia-angular.component.html',
  styleUrls: ['./anomalia-angular.component.scss']
})

export class AnomaliaAngularComponent {

  title = 'parentchild';
  parentName = "Passed data";
  parentArr = ["Bangalore","Delhi"];
}

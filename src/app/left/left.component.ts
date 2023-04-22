import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DescribeCar } from '../app.component';

@Component({
  selector: 'left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})

export class LeftComponent  {

@Output() newChildCarEvent = new EventEmitter<string>();
addCarInApp(value:string){
  this.newChildCarEvent.emit(value)
};


@Output() typeCar = new EventEmitter();

choseTypeCar(value:string){
  this.typeCar.emit(value)
}

}




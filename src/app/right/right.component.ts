import { Component, Input} from '@angular/core';
import { DescribeCar } from '../app.component';


@Component({
  selector: 'right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})

export class RightComponent {
@Input() describeChaildCar:DescribeCar;
}



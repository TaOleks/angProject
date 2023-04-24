import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string

  selectCar(car: DescribeCar) {
    return this.describeCar = car
  };

  watchAllTypesCars(type: string) {
    return this.typeCar = type

  }

  describeCar: DescribeCar;
  typeCar:string|null = null;


  allCars: DescribeCar[] = [

    {
      type: 'big',
      marka: 'Dodge',
      model: 'Journey',
      speed: 270,
      colorCar: 'silver',
      colorSalon: 'black',
      colorWheels: 'silver'
    },
    {
      type: 'big',
      marka: 'Ford',
      model: 'Kuga',
      speed: 250,
      colorCar: 'black',
      colorSalon: 'black',
      colorWheels: 'black'
    },
    {
      type: 'big',
      marka: 'Honda',
      model: 'CR-V',
      speed: 270,
      colorCar: 'White',
      colorSalon: 'White',
      colorWheels: 'Black'
    }, {
      type: 'big',
      marka: 'KIA',
      model: 'Sorento',
      speed: 240,
      colorCar: 'silver',
      colorSalon: 'black',
      colorWheels: 'silver'
    },
    {
      type: 'big',
      marka: 'Reno',
      model: 'Coleos',
      speed: 240,
      colorCar: 'blue',
      colorSalon: 'white',
      colorWheels: 'black'
    },
    {
      type: 'big',
      marka: 'Mazda',
      model: 'CX-5',
      speed: 280,
      colorCar: 'black',
      colorSalon: 'white',
      colorWheels: 'black'
    },
    {
      type: 'mini',
      marka: 'Ford',
      model: 'Ka',
      speed: 270,
      colorCar: 'silver',
      colorSalon: 'black',
      colorWheels: 'silver'
    },
    {
      type: 'mini',
      marka: 'Fiat',
      model: 'Punto',
      speed: 250,
      colorCar: 'black',
      colorSalon: 'black',
      colorWheels: 'black'
    },
    {
      type: 'mini',
      marka: 'Honda',
      model: 'Jazz',
      speed: 270,
      colorCar: 'White',
      colorSalon: 'White',
      colorWheels: 'Black'
    }, {
      type: 'mini',
      marka: 'KIA',
      model: 'Rio',
      speed: 240,
      colorCar: 'silver',
      colorSalon: 'black',
      colorWheels: 'silver'
    },
    {
      type: 'sedan',
      marka: 'Ford',
      model: 'Mondeo',
      speed: 270,
      colorCar: 'silver',
      colorSalon: 'black',
      colorWheels: 'silver'
    },
    {
      type: 'sedan',
      marka: 'Opel',
      model: 'Omega',
      speed: 250,
      colorCar: 'black',
      colorSalon: 'black',
      colorWheels: 'black'
    },
    {
      type: 'sedan',
      marka: 'Honda',
      model: 'Civik',
      speed: 270,
      colorCar: 'White',
      colorSalon: 'White',
      colorWheels: 'Black'
    }, {
      type: 'sedan',
      marka: 'KIA',
      model: 'Cerato',
      speed: 240,
      colorCar: 'silver',
      colorSalon: 'black',
      colorWheels: 'silver'
    }
  ];




}




export interface DescribeCar {
  type: string;
  marka: string;
  model?: string;
  speed: number;
  colorCar: string;
  colorSalon?: string;
  colorWheels: string;
};



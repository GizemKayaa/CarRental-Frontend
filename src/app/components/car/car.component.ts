import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car1 = {
    Id: 1,
    colorName: "gri",
    brandName: "nıssan",
    dailyPrice: 100,
    modelYear: '2018',
    description: 'manual',
  };
  car2 = {
    Id: 2,
    colorName: "beyaz",
    brandName: "honda",
    dailyPrice: 100,
    modelYear: '2018',
    description: 'manual',
  };
  car3 = {
    Id: 3,
    colorName: "kırmızı",
    brandName: "bmw",
    dailyPrice: 100,
    modelYear: '2018',
    description: 'manual',
  };
  car4 = {
    Id: 4,
    colorName: "siyah",
    brandName: "toyota",
    dailyPrice: 100,
    modelYear: '2018',
    description: 'manual',
  };
  car5 = {
    Id: 5,
    colorName: "mavi",
    brandName: "opel",
    dailyPrice: 100,
    modelYear: '2018',
    description: 'manual',
  };

  cars = [
    this.car1, 
    this.car2, 
    this.car3, 
    this.car4, 
    this.car5
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

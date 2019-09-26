import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'has-interpolation-blinding',
  templateUrl: './interpolation-blinding.component.html',
  styleUrls: ['./interpolation-blinding.component.css']
})
export class InterpolationBlindingComponent implements OnInit {

  numero : number = 10;

  quadrado() : number{

    return this.numero * this.numero;


  }

  constructor() { }

  ngOnInit() {
  }

}

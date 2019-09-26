import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'has-property-binding',
  templateUrl: './property-biding.component.html',
  styleUrls: ['./property-biding.component.css']
})
export class PropertyBidingComponent implements OnInit {

  exibiMsg : boolean = true;

  exibir (){

    this.exibiMsg = !this.exibiMsg;
  }


  constructor() { }

  ngOnInit() {
  }

}

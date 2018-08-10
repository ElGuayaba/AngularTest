import { Component, OnInit } from '@angular/core';
import { Calculator } from "./Calculator";

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  public field1 :number;
  public field2 :number;
  public result :number;
  public calc: Calculator;

  sum()
  {
    return this.result = this.calc.sum(this.field1,this.field2);
  }

  substract()
  {
    this.result = this.calc.substract(this.field1,this.field2);
  }

  multiply()
  {
    this.result = this.calc.multiply(this.field1,this.field2);
  }

  divide()
  {
    this.result = this.calc.divide(this.field1,this.field2);
  }
  constructor() { 
    this.calc = new Calculator();
  }

   ngOnInit() {
   }

}

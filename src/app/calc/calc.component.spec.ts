import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Calculator } from "./Calculator";
import { CalcComponent } from './calc.component';

describe('Class: Calculator', () => { 
  let calc: Calculator;

  beforeEach(() => { 
    calc = new Calculator();
  });

  it('should add', () => {
    expect(calc.sum(6,3)).toEqual(9);
  });

  it('should substact', () => {
    expect(calc.substract(6,3)).toEqual(3);
  });

  it('should multiply', () => {
    expect(calc.multiply(6,3)).toEqual(18);
  });

  it('should divide', () => {
    expect(calc.divide(6,3)).toEqual(2);
  });
});
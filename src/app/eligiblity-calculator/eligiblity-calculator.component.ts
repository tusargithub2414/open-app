import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
@Component({
  selector: 'app-eligiblity-calculator',
  templateUrl: './eligiblity-calculator.component.html',
  styleUrls: ['./eligiblity-calculator.component.css']
})
export class EligiblityCalculatorComponent implements OnInit {
  public isEmiExist = false;
  monthlyIncome: number;
  monthlyExpences:number;

  monthlyIncomeSliderOptions: Options = {};
  monthlyExpencesSliderOptions: Options = {};


  constructor() {
    this.monthlyIncome = 150000;
    this.monthlyExpences=50000;
  this.monthlyIncomeSliderOptions =  {
      floor: 100000,
      ceil: 300000,
      showSelectionBar: true
    };

this.monthlyExpencesSliderOptions = {
  floor: 50000,
  ceil: 300000,
  showSelectionBar: true
};

   }

  ngOnInit(): void {

  }


  toggle(){
    this.isEmiExist = !this.isEmiExist;
  }


}

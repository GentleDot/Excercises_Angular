import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entire-calculator',
  templateUrl: './entire-calculator.component.html',
  styleUrls: ['./entire-calculator.component.css']
})
export class EntireCalculatorComponent implements OnInit {
  now: any;
  nowYear: string;
  yearDiff: number;
  inputAge: number;
  inputRetireAge: number;


  constructor() { }

  ngOnInit() {
    this.now = new Date();
    this.nowYear = this.now.getFullYear();
  }

  retireCal(){
    this.yearDiff = Number(this.inputRetireAge) - Number(this.inputAge);
    return Number(this.inputRetireAge) - Number(this.inputAge);
  }

  getRemainYear(){
    if (Number(this.inputAge) > Number(this.inputRetireAge)){
      return "퇴직 예정 나이가 입력한 나이보다 작습니다."
    }
    return "so you can retire in " + (Number(this.nowYear) + Number(this.yearDiff));
  }



}

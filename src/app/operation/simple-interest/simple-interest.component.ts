import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-simple-interest',
  templateUrl: './simple-interest.component.html',
  styleUrls: ['./simple-interest.component.css']
})
export class SimpleInterestComponent implements OnInit {

  inputForm: FormGroup;

  principal : number;
  rateOfInterest: number;
  years : number;
  investment : number;

  constructor(private fb: FormBuilder) {
    this.inputForm = this.fb.group({
      input1 : ["", [Validators.required, Validators.min(1), Validators.pattern(/^\d+$/)]],
      input2 : ["", [Validators.required, Validators.min(1), Validators.pattern(/^[-]?\d+(?:[]?[\d]?[\d])?$/)]],
      input3 : ["", [Validators.required, Validators.min(1), Validators.pattern(/^\d+$/)]],
    });
  }
  ngOnInit() {
  }

  onBtnCalculate(){
    this.principal = this.inputForm.controls.input1.value;
    this.rateOfInterest = this.inputForm.controls.input2.value;
    this.years = this.inputForm.controls.input3.value;

    this.investment = this.principal * (1 + (this.rateOfInterest / 100) * this.years);
    // this.investment = Math.round(this.investment / 100) * 100;
    this.investment = Number(this.investment.toFixed(2));
  }

}

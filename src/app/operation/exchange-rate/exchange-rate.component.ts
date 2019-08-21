import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Converter} from "../converter.enum";

@Component({
  selector: "app-exchange-rate",
  templateUrl: "./exchange-rate.component.html",
  styleUrls: ["./exchange-rate.component.css"]
})

export class ExchangeRateComponent implements OnInit {

  amountFrom: number;
  amountTo: number;
  rateFrom: number;
  rateTo: number = Converter.initDollorRate;

  inputForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.inputForm = this.fb.group({
      input: ["", [Validators.required, Validators.min(1), Validators.pattern(/^\d+$/)]],
      rate: ["", [Validators.required, Validators.min(1), Validators.pattern(/^\d+$/)]],
    });
  }

  ngOnInit() {d

  }

  onClickBtn(){
    this.amountFrom = this.inputForm.controls.input.value;
    this.rateFrom = this.inputForm.controls.rate.value;
    this.amountTo = Math.round(((this.amountFrom * (this.rateFrom / 100)) * 100)) / 100;
  }
}

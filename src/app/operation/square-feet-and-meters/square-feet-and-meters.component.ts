import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Converter} from "../converter.enum";

@Component({
  selector: "app-square-feet-and-meters",
  templateUrl: "./square-feet-and-meters.component.html",
  styleUrls: ["./square-feet-and-meters.component.css"]
})

export class SquareFeetAndMetersComponent implements OnInit {

  length: number;
  width: number;
  squareFeet: number;
  converter: number = Converter.feetToMeter;

  squareForm = new FormGroup({
    firstNum: new FormControl(""),
    secondNum: new FormControl(""),
  });

  constructor(private fb: FormBuilder) {
    this.squareForm = fb.group({
      firstNum: ["", [Validators.required, Validators.min(1), Validators.pattern(/^\d+$/)]],
      secondNum: ["", [Validators.required, Validators.min(1), Validators.pattern(/^\d+$/)]],
    });
  }

  ngOnInit() {
    this.squareForm.controls.firstNum.valueChanges
      .subscribe(input => {
        this.length = input;
      });
    this.squareForm.controls.secondNum.valueChanges
      .subscribe(input => {
        this.width = input;
      })
  }

  onCal() {
    this.squareFeet = Number(this.length) * Number(this.width)
    return this.squareFeet;
  }

  onConvert() {
    return this.squareFeet * this.converter;
  }

}

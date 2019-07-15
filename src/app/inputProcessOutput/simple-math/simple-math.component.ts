import { Component, OnInit } from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: "app-simple-math",
  templateUrl: "./simple-math.component.html",
  styleUrls: ["./simple-math.component.css"]
})
export class SimpleMathComponent implements OnInit {
  num1: number;
  num2: number;

  mathForm = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.mathForm = fb.group({
      firstNum : ["", [Validators.required, Validators.min(1), Validators.max(100), Validators.pattern(/^\d+$/)]],
      secondNum : ["", [Validators.required, Validators.min(1), Validators.max(100), Validators.pattern(/^\d+$/)]],
      });
  }

  ngOnInit() {
  }

  onAddtion() {
    return Number(this.num1) + Number(this.num2);
  }

  onSubtraction() {
    return Number(this.num1) - Number(this.num2);
  }

  onMultiplication() {
    return Number(this.num1) * Number(this.num2);
  }

  onDivision() {
    return Number(this.num1) / Number(this.num2);
  }

}

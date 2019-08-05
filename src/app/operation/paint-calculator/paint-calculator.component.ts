import { Component, OnInit } from '@angular/core';
import {Converter} from "../converter.enum";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-paint-calculator',
  templateUrl: './paint-calculator.component.html',
  styleUrls: ['./paint-calculator.component.css']
})
export class PaintCalculatorComponent implements OnInit {

  inputLiter: number;
  squareMeter: number;
  literConverter: number = Converter.literToSquareMeter;

  inputForm = new FormGroup({
    firstNum: new FormControl(""),
  });

  constructor(private fb: FormBuilder) {
    this.inputForm = fb.group({
      firstNum: ["", [Validators.required, Validators.min(1), Validators.pattern(/^\d+$/)]],
    });
  }

  ngOnInit() {
    this.inputForm.controls.firstNum.valueChanges
      .subscribe(value => {
        this.inputLiter = value;
      });
  }

  onCalPaintQty() {
    this.squareMeter = Math.ceil(this.inputLiter / this.literConverter);
    return this.squareMeter;
  }

}

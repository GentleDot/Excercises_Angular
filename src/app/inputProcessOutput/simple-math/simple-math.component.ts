import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-simple-math',
  templateUrl: './simple-math.component.html',
  styleUrls: ['./simple-math.component.css']
})
export class SimpleMathComponent implements OnInit {
  num1: number;
  num2: number;

  mathForm = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.mathForm = fb.group({
        firstNum : ['', [Validators.min(0), Validators.max(100)]]
      });
  }

  ngOnInit() {
  }

}

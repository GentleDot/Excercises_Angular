import { Component, OnInit } from '@angular/core';
import {Converter} from "../converter.enum";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-pizza-party',
  templateUrl: './pizza-party.component.html',
  styleUrls: ['./pizza-party.component.css']
})
export class PizzaPartyComponent implements OnInit {

  personNum: number;
  pizzaNum: number;
  pizzaPiecesNum: number;
  pizzaPiecesMod: number;

  pizzaForm = new FormGroup({
    firstNum: new FormControl(""),
    secondNum: new FormControl(""),
    thirdNum: new FormControl(""),
  });

  constructor(private fb: FormBuilder) {
    this.pizzaForm = fb.group({
      firstNum: ["", [Validators.required, Validators.min(1), Validators.pattern(/^\d+$/)]],
      secondNum: ["", [Validators.required, Validators.min(1), Validators.pattern(/^\d+$/)]],
      thirdNum: ["", [Validators.required, Validators.min(1), Validators.pattern(/^\d+$/)]],
    });
  }

  ngOnInit() {
    this.pizzaForm.controls.firstNum.valueChanges
      .subscribe(value => {
        this.personNum = value;
      });
    this.pizzaForm.controls.secondNum.valueChanges
      .subscribe(value => {
        this.pizzaNum = value;
      });
    this.pizzaForm.controls.thirdNum.valueChanges
      .subscribe(value => {
        this.pizzaPiecesNum = value;
      });
  }

  onPizzaPieceCal() {
    this.pizzaPiecesMod = (this.pizzaNum * this.pizzaPiecesNum) % this.personNum;
    return Math.floor((this.pizzaNum * this.pizzaPiecesNum) / this.personNum);
  }

}

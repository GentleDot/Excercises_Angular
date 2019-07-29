import { Component, OnInit } from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Converter} from "../converter.enum";

@Component({
  selector: "app-square-feet-and-meters",
  templateUrl: "./square-feet-and-meters.component.html",
  styleUrls: ["./square-feet-and-meters.component.css"]
})

export class SquareFeetAndMetersComponent implements OnInit {

  length: number;
  width: number;
  converter: number = Converter.feetToMeter;

  squareForm = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.squareForm = fb.group({
      firstNum : ["", [Validators.required, Validators.min(1), Validators.pattern(/^\d+$/)]],
      secondNum : ["", [Validators.required, Validators.min(1), Validators.pattern(/^\d+$/)]],
    });
  }

  ngOnInit() {
  }

}

import {Component, OnInit} from "@angular/core";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: "app-self-checkout",
  templateUrl: "./self-checkout.component.html",
  styleUrls: ["./self-checkout.component.css"]
})
export class SelfCheckoutComponent implements OnInit {

  initForm: FormGroup;
  inputForm: FormGroup;

  subTotal: number;
  tax: number;
  total: number;

  rsltFlag: boolean;

  constructor(private fb: FormBuilder) {
    this.initForm = this.fb.group({
      items: this.fb.array([]),
    });
  }

  ngOnInit() {
    for(let i = 0; i < 3; i++){
      this.addItem();
    }
  }

  get addFormArray() {
    return this.initForm.get("items") as FormArray;
  }

  addItem() {
    this.inputForm = this.fb.group({
        price : ["", [Validators.required, Validators.min(1), Validators.pattern(/^\d+$/)]],
        quantity : ["", [Validators.required, Validators.min(1), Validators.pattern(/^\d+$/)]],
    });
    this.addFormArray.push(this.inputForm);
    // this.addFormArray.push(new FormGroup({
    //   price: new FormControl("", [Validators.required, Validators.min(1), Validators.pattern(/^\d+$/)]),
    //   quantity: new FormControl("", [Validators.required, Validators.min(1), Validators.pattern(/^\d+$/)]),
    // }));
  }

  calData(){
    if (!this.initForm.valid){
      this.rsltFlag = false;
      return;
    }

    let subTotal = 0;
    let tax = 0.0;
    let total = 0.0;
    // console.log(JSON.stringify(this.initForm.controls.items.value[0]));
    // console.log(JSON.stringify(this.initForm.value.items[0]));

    for(const item of this.initForm.value.items){
      subTotal += Number(item.price * item.quantity);
    }
    tax = subTotal * 0.055;
    total = subTotal + tax;

    // console.log("중간합계 : " + subTotal);
    // console.log("세금 : " + tax);
    // console.log("최종 : " + total);

    this.subTotal = subTotal;
    this.tax = tax;
    this.total = total;

    this.rsltFlag = true;
  }

}

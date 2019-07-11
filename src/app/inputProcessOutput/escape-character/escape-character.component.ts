import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
  selector: 'app-escape-character',
  templateUrl: './escape-character.component.html',
  styleUrls: ['./escape-character.component.css']
})
export class EscapeCharacterComponent implements OnInit {

  constructor() { }

  private inputQuote: string;
  private inputNm: string;
  private rsltStr: string;

  /* getter, setter */
  @Input()
  get quote(): string {
    return this.inputQuote;
  }

  set quote(inputStr: string){
    this.inputQuote = inputStr;
  }

  @Input()
  get name(): string {
    return this.inputNm;
  }

  set name(inputStr: string){
    this.inputNm = inputStr;
  }

  ngOnInit() {
  }

  /*@Output() outputQuote: EventEmitter<string> = new EventEmitter();*/
  /*
    EventEmitter와 emit의 이해가 부족함. 정리 꼭 하자!
    createQuote(){
    this.outputQuote.emit('\"' + this.quote + '. \"');
  }*/

  btnClick(){
    this.rsltStr = this.name + ' says, \"' + this.quote + '. \"';
  }

}

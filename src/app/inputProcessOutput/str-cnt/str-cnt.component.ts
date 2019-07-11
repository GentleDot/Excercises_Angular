import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-str-cnt',
  templateUrl: './str-cnt.component.html',
  styleUrls: ['./str-cnt.component.css']
})
export class StrCntComponent implements OnInit {
  userNm: string;
  userNmStrCnt: number;

  constructor() { }

  ngOnInit() {
  }
  doPrintRslt(inputStr: string) {
    if (inputStr === '') {
      alert('무슨 글자라도 입력해보세요!');
    }
    this.userNm = inputStr;
    this.userNmStrCnt = inputStr.length;

    String
  }

}

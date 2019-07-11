import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-mad-libs',
  templateUrl: './mad-libs.component.html',
  styleUrls: ['./mad-libs.component.css']
})
export class MadLibsComponent implements OnInit {
  private _noun: string;
  private _verb: string;
  private _adjective: string;
  private _adverb: string;

  constructor() { }

  ngOnInit() {
  }

  get noun(): string {
    return this._noun;
  }

  set noun(value: string) {
    this._noun = value;
  }

  get verb(): string {
    return this._verb;
  }

  set verb(value: string) {
    this._verb = value;
  }

  get adjective(): string {
    return this._adjective;
  }

  set adjective(value: string) {
    this._adjective = value;
  }

  get adverb(): string {
    return this._adverb;
  }

  set adverb(value: string) {
    this._adverb = value;
  }
}

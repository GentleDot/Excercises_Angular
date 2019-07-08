import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hello-user',
  templateUrl: './hello-user.component.html',
  styleUrls: ['./hello-user.component.css']
})
export class HelloUserComponent implements OnInit {
  @Input() name;

  constructor() {
  }

  ngOnInit() {
  }


  onBtnClick(){
    this.name = name;
  }

}

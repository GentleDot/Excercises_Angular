import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practiceNg';

  quoteStr: string;

  printQuoteStr(str: string){
    this.quoteStr = str;
  }

}

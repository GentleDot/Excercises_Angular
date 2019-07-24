import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloUserComponent } from './inputProcessOutput/hello-user/hello-user.component';
import {COMPOSITION_BUFFER_MODE, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { StrCntComponent } from './inputProcessOutput/str-cnt/str-cnt.component';
import { EscapeCharacterComponent } from './inputProcessOutput/escape-character/escape-character.component';
import { MadLibsComponent } from './inputProcessOutput/mad-libs/mad-libs.component';
import { SimpleMathComponent } from './inputProcessOutput/simple-math/simple-math.component';
import { EntireCalculatorComponent } from './inputProcessOutput/entire-calculator/entire-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloUserComponent,
    StrCntComponent,
    EscapeCharacterComponent,
    MadLibsComponent,
    SimpleMathComponent,
    EntireCalculatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: COMPOSITION_BUFFER_MODE,
      useValue: false
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

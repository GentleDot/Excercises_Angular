import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloUserComponent } from './inputProcessOutput/hello-user/hello-user.component';
import {COMPOSITION_BUFFER_MODE, FormsModule} from "@angular/forms";
import { StrCntComponent } from './inputProcessOutput/str-cnt/str-cnt.component';
import { EscapeCharacterComponent } from './inputProcessOutput/escape-character/escape-character.component';
import { MadLibsComponent } from './inputProcessOutput/mad-libs/mad-libs.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloUserComponent,
    StrCntComponent,
    EscapeCharacterComponent,
    MadLibsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HelloUserComponent} from './inputProcessOutput/hello-user/hello-user.component';
import {StrCntComponent} from "./inputProcessOutput/str-cnt/str-cnt.component";
import {EscapeCharacterComponent} from "./inputProcessOutput/escape-character/escape-character.component";
import {MadLibsComponent} from "./inputProcessOutput/mad-libs/mad-libs.component";


const routes: Routes = [
  {path:'test1', component:HelloUserComponent,},
  {path:'test2', component:StrCntComponent},
  {path:'test3', component:EscapeCharacterComponent},
  {path:'test4', component:MadLibsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

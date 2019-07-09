import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HelloUserComponent} from './inputProcessOutput/hello-user/hello-user.component';
import {StrCntComponent} from "./inputProcessOutput/str-cnt/str-cnt.component";


const routes: Routes = [
  {path:'test1', component:HelloUserComponent,},
  {path:'test2', component:StrCntComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

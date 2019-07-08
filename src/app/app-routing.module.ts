import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HelloUserComponent} from './inputProcessOutput/hello-user/hello-user.component';


const routes: Routes = [
  {path:'test1', component:HelloUserComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

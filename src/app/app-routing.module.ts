import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatepageComponent } from '../app/updatepage/updatepage.component'
import { TaskpageComponent } from './taskpage/taskpage.component';

const routes: Routes = [
  {path: 'taskpage', component: TaskpageComponent },
  {path:'updatepage', component: UpdatepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

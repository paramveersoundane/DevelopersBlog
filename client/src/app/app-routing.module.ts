import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';

const routes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'signin',
 component: LogInComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

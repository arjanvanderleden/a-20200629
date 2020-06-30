import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent, UserRegistrationPageComponent} from './components';


const routes: Routes = [
  {
    path: 'registration',
    pathMatch: 'full',
    component: UserRegistrationPageComponent
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomePageComponent
  },
  {
    path: '',
    redirectTo: 'home', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

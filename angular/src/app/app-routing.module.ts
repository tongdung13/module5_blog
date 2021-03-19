import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import { HomeComponent } from './homes/home/home.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {RegisterComponent} from './components/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    component: AdminLayoutComponent,
    loadChildren: () => import('./layouts/layout.module').then(module => module.LayoutModule)
  },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })],
  exports: [RouterModule]
})


export class AppRoutingModule { }


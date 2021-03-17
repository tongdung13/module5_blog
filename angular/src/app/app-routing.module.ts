import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  {path: '', component: LoginComponent , pathMatch: 'full' },
  {path: 'admin', component: AdminLayoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }


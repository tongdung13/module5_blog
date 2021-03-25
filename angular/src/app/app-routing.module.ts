import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './homes/home/home.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { RegisterComponent } from './components/register/register.component';
import { BlogtopComponent } from './homes/blogtop/blogtop.component';
import { AdminComponent } from './admin/admin/admin.component';
import { BlogDetailsComponent } from './blogs/blog-details/blog-details.component';
import { BlogGuard } from './blogs/blog.guard';

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
    path: 'blogtop',
    component: BlogtopComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [BlogGuard],
    loadChildren: () => import('./layouts/layout.module').then(module => module.LayoutModule)
  },
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () => import('./admin/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'blog-details/:id',
    component: BlogDetailsComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }


import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blogs/blog-list/blog-list.component';
import { CreateBlogComponent } from './blogs/create-blog/create-blog.component';
import {LoginComponent} from './components/login/login.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
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


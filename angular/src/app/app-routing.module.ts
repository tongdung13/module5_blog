import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blogs/blog-list/blog-list.component';
import { CreateBlogComponent } from './blogs/create-blog/create-blog.component';
import {LoginComponent} from './components/login/login.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  {path: '', component: LoginComponent , pathMatch: 'full' },
  {path: 'admin', component: AdminLayoutComponent},
  { path: 'createBlog', component: CreateBlogComponent},
  { path: 'blog', component: BlogListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }


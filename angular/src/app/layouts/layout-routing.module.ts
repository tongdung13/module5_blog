import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateBlogComponent } from '../blogs/create-blog/create-blog.component';
import { BlogListComponent } from '../blogs/blog-list/blog-list.component';

const routes : Routes = [
  { path: 'createBlog', component: CreateBlogComponent},
  { path: 'blog', component: BlogListComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from '../blogs/blog-list/blog-list.component';
import { CreateBlogComponent } from '../blogs/create-blog/create-blog.component';
import { UpdateBlogComponent } from '../blogs/update-blog/update-blog.component';
import { BlogDetailsComponent } from '../blogs/blog-details/blog-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BlogListComponent,
    CreateBlogComponent,
    UpdateBlogComponent,
    BlogDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LayoutModule { }

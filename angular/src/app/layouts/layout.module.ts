import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from '../blogs/blog-list/blog-list.component';
import { CreateBlogComponent } from '../blogs/create-blog/create-blog.component';
import { UpdateBlogComponent } from '../blogs/update-blog/update-blog.component';
import { BlogDetailsComponent } from '../blogs/blog-details/blog-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CKEditorModule } from 'ckeditor4-angular';
import { UpdateuserComponent } from '../components/updateuser/updateuser.component';
import { DetailsComponent } from '../components/details/details.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';


const routes: Routes = [
  { path: 'createBlog',
    component: CreateBlogComponent
  },
  { path: 'blog',
    component: BlogListComponent
  },
  {
    path: 'edit/:id',
    component: UpdateBlogComponent
  },
  {
    path: 'user',
    component: DetailsComponent
  },
  {
    path: 'update-profile',
    component: UpdateuserComponent
  }
]

@NgModule({
  declarations: [
    BlogListComponent,
    CreateBlogComponent,
    UpdateBlogComponent,
    BlogDetailsComponent,
    UpdateuserComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CKEditorModule,
    Ng2SearchPipeModule

  ]
})
export class LayoutModule { }

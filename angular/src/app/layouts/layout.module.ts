import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from '../blogs/blog-list/blog-list.component';
import { CreateBlogComponent } from '../blogs/create-blog/create-blog.component';
import { UpdateBlogComponent } from '../blogs/update-blog/update-blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { UpdateuserComponent } from '../components/updateuser/updateuser.component';
import { DetailsComponent } from '../components/details/details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CKEditorModule } from 'ng2-ckeditor';
import { DetailsUserComponent } from '../components/details-user/details-user.component';
import { DetailsPrivateComponent } from '../blogs/details-private/details-private.component';
import { AdminGuard } from '../admin/admin.guard';
import { AdminServiceService } from '../admin/admin-service.service';
import { BlogGuard } from '../blogs/blog.guard';
import { NgxPaginationModule } from 'ngx-pagination';
import { JwtService } from '../components/jwt.service';



const routes: Routes = [
  {
    path: 'createBlog',
    component: CreateBlogComponent,
    canActivate: [BlogGuard]
  },
  {
    path: 'blog',
    component: BlogListComponent,
  },
  {
    path: 'edit/:id',
    component: UpdateBlogComponent
  },
  {
    path: 'update-profile',
    component: UpdateuserComponent
  },
  {
    path: 'user-details',
    component: DetailsUserComponent,
  },
  {
    path: 'blog-details-private/:id',
    component: DetailsPrivateComponent
  }

];

@NgModule({
  declarations: [
    BlogListComponent,
    CreateBlogComponent,
    UpdateBlogComponent,
    UpdateuserComponent,
    DetailsUserComponent,
    DetailsPrivateComponent,


  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CKEditorModule,
    Ng2SearchPipeModule,
    NgxPaginationModule

  ],
  providers: [AdminGuard, AdminServiceService, BlogGuard, JwtService]

})
export class LayoutModule { }

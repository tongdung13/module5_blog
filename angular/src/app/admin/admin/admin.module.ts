import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminBlogComponent } from '../admin-blog/admin-blog.component';
import { AdminUserComponent } from '../admin-user/admin-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminLoginComponent } from '../admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { AdminGuard } from '../admin.guard';

const routes: Routes = [
  {
    path: 'userList',
    component: AdminUserComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'admin-login',
    component: AdminLoginComponent
  },
  {
    path: 'blogList',
    component: AdminBlogComponent,
    canActivate: [AdminGuard]
  }
]

@NgModule({
  declarations: [
    AdminBlogComponent,
    AdminUserComponent,
    AdminLoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild(routes)
  ],
  providers: [AdminServiceService, AdminGuard]
})
export class AdminModule { }

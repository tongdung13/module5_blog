import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from 'src/app/blogs/blog-details/blog-details.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: 'blog-details/:id',
    component: BlogDetailsComponent
  }
] 

@NgModule({
  declarations: [
    BlogDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    
  ]
})
export class DetailsBlogModule { }

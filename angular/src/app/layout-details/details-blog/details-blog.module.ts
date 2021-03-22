import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from 'src/app/blogs/blog-details/blog-details.component';
import { FormsModule } from '@angular/forms';
import { DetailsPrivateComponent } from 'src/app/blogs/details-private/details-private.component';


const routes: Routes = [
  {
    path: 'blog-details/:id',
    component: BlogDetailsComponent
  },
  {
    path: 'blog-details-private/:id',
    component: DetailsPrivateComponent
  }
]

@NgModule({
  declarations: [
    BlogDetailsComponent,
    DetailsPrivateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,

  ]
})
export class DetailsBlogModule { }

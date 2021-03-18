import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from '../blogs/blog-list/blog-list.component';
import { CreateBlogComponent } from '../blogs/create-blog/create-blog.component';
import { UpdateBlogComponent } from '../blogs/update-blog/update-blog.component';
import { BlogDetailsComponent } from '../blogs/blog-details/blog-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutRoutingModule } from './layout-routing.module';



@NgModule({
  declarations: [
    BlogListComponent,
    CreateBlogComponent,
    UpdateBlogComponent,
    BlogDetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    LayoutRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireStorage,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")
  ]
})
export class LayoutModule { }

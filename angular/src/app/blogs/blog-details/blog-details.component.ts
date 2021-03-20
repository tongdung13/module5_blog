import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blogs/blog.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  blogs: any;
  constructor(private service: BlogService,
              private router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  // tslint:disable-next-line:typedef
  loadData()
  {
    this.service.getAll().subscribe(
      data => {
        this.blogs = data;
        console.log(data);
      }, error => console.log(error)
    );
  }

  // tslint:disable-next-line:typedef
  list(){
    this.router.navigate(['']);

  }
}

import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../blogs/blog.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blogtop',
  templateUrl: './blogtop.component.html',
  styleUrls: ['./blogtop.component.css']
})
export class BlogtopComponent implements OnInit {
  users: any;
  constructor(
    private service: BlogService,
    private router: Router
  ) { }
  blogs: any;

  // tslint:disable-next-line:typedef
  value: any;
  ngOnInit(): void {
    this.loadData();
  }
  // tslint:disable-next-line:typedef
  loadData()
  {
    this.service.publicAll().subscribe(
      data => {
        this.blogs = data;
        console.log(data);
      }, error => console.log(error)
    );
  }
}

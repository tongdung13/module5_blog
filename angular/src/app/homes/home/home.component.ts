import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../blogs/blog.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filter: any;
  p: number = 1;
  constructor(
    private service: BlogService,
    private router: Router
  ) { }
  blogs: any;
  blog: any;
  // tslint:disable-next-line:typedef
  value: any;

  ngOnInit(): void {
    this.loadData();
  }
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

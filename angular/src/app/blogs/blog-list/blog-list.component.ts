import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/components/jwt.service';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  filter: any;
  blogs: any;
  users: any;
  id: any;

  constructor(
    private service: BlogService,
    private jwtService: JwtService
  ) { }

  ngOnInit(): void {
    this.loadUser();
    this.getPostUserLogin();
  }

  getPostUserLogin() {
    this.id = localStorage.getItem('id');
    this.service.getBlogUserLogin().subscribe(
      data => {
        this.blogs = data;
        console.log(data);
      }, error => console.log(error)
    )
  }

  loadUser() {
    this.id = localStorage.getItem('id');
    this.jwtService.show(this.id).subscribe(
      data => {
        console.log(data);
        this.users = data;
      }, error => console.log(error)
    )
  }


}

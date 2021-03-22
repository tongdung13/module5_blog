import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blogs/blog.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Blog} from '../blog';
import { JwtService } from 'src/app/components/jwt.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  blogs: any;
  id!: any;
  users: any;
  constructor(private service: BlogService,
              private router: Router,
              private route: ActivatedRoute,
              private userService: JwtService
              ) { }

  ngOnInit(): void {
    this.blogs = new Blog();
    this.id = this.route.snapshot.params.id;
    this.service.show(this.id).subscribe(
      data => {
        console.log(data);
        this.blogs = data;
      }, error => console.log(error)
    );

    this.loadUser();
  }

  loadUser()
  {
    this.id = localStorage.getItem('id');
    this.userService.show(this.id).subscribe(
      data => {
        console.log(data);
        this.users = data;
      }, error => console.log(error)
    )
  }


  // tslint:disable-next-line:typedef
  list(){
    this.router.navigate(['']);
  }
}

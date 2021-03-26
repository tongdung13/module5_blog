import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blogs/blog.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Blog} from '../blog';
import { JwtService } from 'src/app/components/jwt.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  blogs: any;
  id!: any;
  users: any;
  userLogin = false;
  constructor(private service: BlogService,
              private router: Router,
              private route: ActivatedRoute,
              private jwtService: JwtService,
              private toastrService: NotificationService
              ) { }

  ngOnInit(): void {
    this.blogs = new Blog();
    this.id = this.route.snapshot.params.id;
    this.service.showPublic(this.id).subscribe(
      data => {
        console.log(data);
        this.blogs = data;
      }, error => console.log(error)
    );

    this.loadUser();
    this.userLogin = this.jwtService._isLoggedIn;
    console.log(this.userLogin)

  }

  loadUser()
  {
    this.id = localStorage.getItem('id');
    this.jwtService.showPublic(this.id).subscribe(
      data => {
        console.log(data);
        this.users = data;
      }, error => console.log(error)
    )
  }


  logOut() {
    this.jwtService.logout().subscribe(res => {
      localStorage.removeItem('AccessToken');
      localStorage.removeItem('user');
      this.userLogin = false;
      this.jwtService._isLoggedIn = false;
      this.router.navigate(['']);
      this.toastrService.showSuccess("You have successfully logged out !");
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtService } from 'src/app/components/jwt.service';
import { NotificationService } from 'src/app/service/notification.service';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-details-private',
  templateUrl: './details-private.component.html',
  styleUrls: ['./details-private.component.css']
})
export class DetailsPrivateComponent implements OnInit {

  blogs: any;
  id!: any;
  users: any;
  constructor(private service: BlogService,
              private router: Router,
              private route: ActivatedRoute,
              private userService: JwtService,
              private toastrService: NotificationService
              ) { }

  ngOnInit(): void {
    this.blogs = new Blog();
    this.id = this.route.snapshot.params['id'];
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

  // logOut() {
  //   this.id = localStorage.getItem('id');
  //   localStorage.removeItem('AccessToken');
  //   this.userService.destroyToken(this.users);
  //   this.router.navigate(['']);
  //   this.toastrService.showSuccess("You have successfully logged out !");
  // }

  // tslint:disable-next-line:typedef
  list(){
    this.router.navigate(['/blog']);
  }


  // tslint:disable-next-line:typedef
  deleteBlog(id: number)
  {
    if (confirm('Bạn có muốn xóa không ?' + id)) {
      this.service.delete(id).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/blog'])
        }, error => console.log(error)
      )
    }
  }
}

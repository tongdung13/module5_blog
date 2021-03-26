import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtService } from 'src/app/components/jwt.service';
import { NotificationService } from 'src/app/service/notification.service';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';
import { Comment } from '../comment';

@Component({
  selector: 'app-details-private',
  templateUrl: './details-private.component.html',
  styleUrls: ['./details-private.component.css']
})
export class DetailsPrivateComponent implements OnInit {

  blogs: any;
  id!: any;
  users: any;
  comments: any;
  constructor(private service: BlogService,
              private router: Router,
              private route: ActivatedRoute,
              private userService: JwtService,
              private toastrService: NotificationService
  ) { }

  ngOnInit(): void {
    this.blogs = new Blog();
    this.loadUser();
    this.comments = new Comment();
    this.id = this.route.snapshot.params['id'];
    this.service.show(this.id).subscribe(
      data => {
        console.log(data);
        this.blogs = data;
      }, error => console.log(error)
    );

    this.service.showComment(this.id).subscribe(
      data => {
        console.log(data);
        this.comments = data;
      }, error => console.log(error)
    )

    this.loadData();

  }

  loadUser() {
    this.id = localStorage.getItem('id');
    this.userService.show(this.id).subscribe(
      data => {
        console.log(data);
        this.users = data;
      }, error => console.log(error)
    )
  }

  list() {
    this.router.navigate(['/blog']);
  }

  deleteBlog(id: number, title: string) {
    if (confirm('Bạn có muốn xóa không ?' + title)) {
      this.service.delete(id).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/blog'])
        }, error => console.log(error)
      )
    }
  }

  comMent() {
    this.id = localStorage.getItem('id');
    this.service.comment(this.comments).subscribe(
      data => {
        console.log(data);
        this.comments = new Comment();
        this.router.navigate(['/blog-details-private']);
      }, error => console.log(error)
    )
  }

  loadData()
  {
    this.service.getComment().subscribe(
      data => {
        this.comments = data;
        console.log(data);
      }, error => console.log(error)
    )
  }

}

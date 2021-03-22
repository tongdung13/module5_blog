import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blogs/blog.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Blog} from '../blog';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  blogs: any;
  id!: number;
  constructor(private service: BlogService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.blogs = new Blog();
    this.id = this.route.snapshot.params.id;
    this.service.show(this.id).subscribe(
      data => {
        console.log(data);
        this.blogs = data;
      }, error => console.log(error)
    );

  }


  // tslint:disable-next-line:typedef
  list(){
    this.router.navigate(['']);
  }
}

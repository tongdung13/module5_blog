import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blogs/blog.service';


@Component({
  selector: 'app-blogday',
  templateUrl: './blogday.component.html',
  styleUrls: ['./blogday.component.css']
})
export class BlogdayComponent implements OnInit {
  constructor(
    private service: BlogService
  ) { }
  blogs: any;
  blog: any;

  ngOnInit(): void {
    this.loadData();
  }

  loadData()
  {
    this.service.getAll().subscribe(
      data => {
        this.blogs = data;
        console.log(data);
      }, error => console.log(error)
    );
  }

}

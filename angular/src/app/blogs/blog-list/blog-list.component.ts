import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  filter: any;
  blogs: any;
  constructor(
    private service: BlogService
  ) { }

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
    )
  }

  deleteBlog(id: number)
  {
    if (confirm("Bạn có muốn xóa không ?" + id)) {
        this.service.delete(id).subscribe(
        data => {
          this.loadData();
          console.log(data);
        }, error => console.log(error)
      )
    }
  }
}

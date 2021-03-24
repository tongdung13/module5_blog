import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})
export class AdminBlogComponent implements OnInit {

  blogs: any;
  constructor(private service: AdminServiceService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData()
  {
    this.service.getBlog().subscribe(
      data => {
        console.log(data);
        this.blogs = data;
      }, error => console.log(error)
    )
  }

  delete(id: number)
  {
    if (confirm("You have want delete is not ?")) {
    this.service.deleteBlog(id).subscribe(
      data => {
        console.log(data);
        this.loadData();
      }, error => console.log(error)
    )
    }
  }
}

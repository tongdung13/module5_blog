import { Component, OnInit } from '@angular/core';
import { JwtService } from '../jwt.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  users: any;
  constructor(private service: JwtService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData()
  {
    this.service.getAll().subscribe(
      data => {
        console.log(data);
        this.users = data;
      }, error => console.log(error)
    )
  }

  delete(id: number)
  {
    if (confirm("You have want delete is not ?")) {
      this.service.delete(id).subscribe(
        data => {
          console.log(data);
          this.loadData();
        }, error => console.log(error)
      )
    }
  }

}

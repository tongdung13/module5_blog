import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JwtService } from '../jwt.service';
import { User } from '../user';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {

  id!: any;
  users!: any;
  constructor(
    private service: JwtService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.users = new User();

    this.id = localStorage.getItem('id');
    console.log(this.id);
    this.service.show(this.id).subscribe(
      data => {
        console.log(data);
        this.users = data;
      }, error => console.log(error)
    )
  }

}

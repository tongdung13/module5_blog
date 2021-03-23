import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

  users: any;
  constructor(private service: AdminServiceService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData()
  {
    this.service.getUser().subscribe(
      data => {
        console.log(data);
        this.users = data;
      } , error => console.log(error)
    )
  }

  delete(id: number)
  {
    return this.service.deleteUser(id).subscribe(
      data => {
        console.log(data);
        this.loadData();
      }, error => console.log(error)
    )
  }

}

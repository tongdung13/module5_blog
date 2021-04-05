import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtService } from '../jwt.service';
import { ConfirmedValidator } from './validator';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  
  changePasswordForm: FormGroup = new FormGroup({});
  id!: any;
  user!: any;
  password!: any;
  newPassword!: any;
  newPasswordConfirm!: any;

  constructor(private jwtService: JwtService,
    private router: Router,
    private toastr: ToastrService,
    private fb: FormBuilder) {this.changePasswordForm = fb.group({
      password: ['',[Validators.required,Validators.minLength(6)]],
      newPassword: ['', [Validators.required,Validators.minLength(6)]],
      newPasswordConfirm: ['', [Validators.required,Validators.minLength(6)]]
    }, {
      validator: ConfirmedValidator('newPassword', 'newPasswordConfirm')
    }) }

  ngOnInit(): void {
    this.id = localStorage.getItem("id");
    this.user = this.jwtService.show("id");
    this.getToken();
  }
  get f(){
    return this.changePasswordForm.controls;
  }

  getToken(){
    if(localStorage.getItem('token')){
      this.router.navigate(['change-password']);
    }else {
      this.router.navigate([''])
    }
  }
  submit(){

    this.jwtService.changePassword(this.id, this.changePasswordForm.value.password, this.changePasswordForm.value.newPassword, this.changePasswordForm.value.newPasswordConfirm).subscribe(
      data => {
        this.toastr.success('Đổi mật khẩu thành công');
        this.router.navigate(['']);
        console.log(data);
      },
      error => this.toastr.error("Mật khẩu không đúng") )
  }
  
}

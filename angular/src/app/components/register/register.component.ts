import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {JwtService} from '../jwt.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;
  err: any = null;
  isSuccessfull = false;
  isSignuUpFailed = false;
  constructor(
    public fb: FormBuilder,
    public router: Router,
    public jwtService: JwtService
  ) {
    this.signupForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      password_confirmation: ['']
    });
  }

  ngOnInit(): void {}
  // tslint:disable-next-line:typedef
  onSubmit() {
    this.jwtService.signUp(this.signupForm.value).subscribe(
      res => {
        console.log(res);
        this.isSuccessfull = true;
        this.isSignuUpFailed = false;
        alert('dang ky thanh cong');
      },
      error => {
        this.err = error.error.message;
        this.isSignuUpFailed = true;
      },
      () => {
        this.signupForm.reset();
        this.router.navigate(['login']);
      }
    );
  }

  // tslint:disable-next-line:typedef
  list()
  {
    this.router.navigate(['login']);
  }
}

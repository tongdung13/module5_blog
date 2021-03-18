import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {JwtService} from '../jwt.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm: any = FormGroup;
  err: any = null;
  isSuccessfull = false;
  isSignuUpFailed = false;
  constructor(
    public fb: FormBuilder,
    public router: Router,
    public jwtService: JwtService
  ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      password_confirmation: ['', [Validators.required, Validators.minLength(5)]]
    });
    console.log(this.signupForm);
  }
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

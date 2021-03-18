import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { NotificationService } from 'src/app/service/notification.service';
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
    public jwtService: JwtService,
    private toastrService: NotificationService
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
        this.toastrService.showSuccess("Bạn đã đăng ký thành công");
      },
      error => {
        this.err = error.error.message;
        this.isSignuUpFailed = true;
        this.toastrService.showSuccess("Bạn đã đăng ký thất bại");
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

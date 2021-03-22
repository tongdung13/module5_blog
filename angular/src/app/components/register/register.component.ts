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
      name: ['', [Validators.required, Validators.min(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(5)]],
      password_confirmation: ['', [Validators.required, Validators.min(5)]]
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
        this.toastrService.showSuccess("You have successfully registered ^^");
      },
      error => {
        this.err = error.error.message;
        this.isSignuUpFailed = true;
        this.toastrService.showError("You have failed to register !");
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

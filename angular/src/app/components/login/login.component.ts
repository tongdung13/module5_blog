import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/admin/admin-service.service';
import { BlogService } from 'src/app/blogs/blog.service';
import { NotificationService } from 'src/app/service/notification.service';
import { JwtService } from '../jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any = FormGroup;
  errors: string = '';
  email = 'haivl@gmail.com';
  password = '123456';
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public jwtService: JwtService,
    private toastrService: NotificationService,
    private loginService: AdminServiceService,
    private blogService: BlogService
  ) {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(5)]],
    });
    console.log(this.loginForm);

  }

  // tslint:disable-next-line:typedef
  onSubmit(value: any) {
    let data = this.loginForm.value;
    this.jwtService.signIn(data).subscribe(res => {
      this.blogService.setLogin(true);
      console.log(res);
      localStorage.setItem('AccessToken', res.token);
      localStorage.setItem('userLogin', res.user);
      this.toastrService.showSuccess("Successful login ^^");
      this.router.navigate(['']);
    }, error => {
      console.log(error);
      this.toastrService.showError("You have failed login !");
    }
    );
  }

}

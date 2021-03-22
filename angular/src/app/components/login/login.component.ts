import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { NotificationService } from 'src/app/service/notification.service';
import {JwtService} from '../jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any = FormGroup;
  errors: string = '';
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public jwtService: JwtService,
    private toastrService: NotificationService
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
  onSubmit() {
    let data = this.loginForm.value;
    this.jwtService.signIn(data).subscribe(res => {
      console.log(res);
      localStorage.setItem('AccessToken', res.token);
      localStorage.setItem('id', res.user.id)
      this.toastrService.showSuccess("Successful login ^^");
      this.router.navigate(['/blog']);
    }, error => {
      console.log(error);
      this.toastrService.showError("You have failed login !");
    }
    );
  }

}

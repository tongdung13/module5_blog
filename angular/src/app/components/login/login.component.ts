import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {JwtService} from '../jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm: any = FormGroup;
  errors: any = null;
  email = '';
  password = '';

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public jwtService: JwtService,
  ) {
    this.signinForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
    this.onSubmit();
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.jwtService.signIn(this.signinForm.value).subscribe(
      (data: { token: string; }) => {
        localStorage.setItem('AccessToken', data.token);
        this.router.navigate(['/admin']);
      }, (error: any) => {
        console.log(error);
      }
    );
  }

}

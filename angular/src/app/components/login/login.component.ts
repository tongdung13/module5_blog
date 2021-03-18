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
  loginForm: FormGroup;
  errors: string = '';
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public jwtService: JwtService,
  ) {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  ngOnInit(): void {

  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    let data = this.loginForm.value;
    this.jwtService.signIn(data).subscribe(res => {
        if(res.error) {
            this.errors = res.message
        } else {
          console.log(res)
          
          this.router.navigate(['admin'])
        }
    }
    );
  }

}

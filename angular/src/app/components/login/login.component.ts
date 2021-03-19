import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import { NotificationService } from 'src/app/service/notification.service';
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
    private toastrService: NotificationService
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
        if (res.error) {
            this.errors = res.message;
            this.toastrService.showError("You have failed login !");
        } else {
          console.log(res);
          this.toastrService.showSuccess("Successful login ^^");
          this.router.navigate(['/blog']);
        }
    }
    );
  }

}

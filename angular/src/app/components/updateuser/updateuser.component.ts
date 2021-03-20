import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { NotificationService } from 'src/app/service/notification.service';
import { JwtService } from '../jwt.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  profileForm: any = FormGroup;
  [x: string]: any;
  user: any;
  id: any;
  selectedFile!: File;
  srcImg!: string;
  downloadURL!: Observable<string>;
  uploadPercent!: any;
  pb: any;
  constructor(
    private service: JwtService,
    private router: Router,
    private toastrService: NotificationService,
    private fb: FormBuilder,
    private storage: AngularFireStorage,
  ) { }

  ngOnInit(): void {
    this.getToken();
    this.loadData();

    this.profileForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      image: ['', [Validators.required]]
    })
  }

  getToken()
  {
    if (localStorage.getItem('token')) {
      this.router.navigate(['update-profile']);
    }
  }

  loadData()
  {
    this.id = localStorage.getItem('id');
    this.service.show(this.id).subscribe(
      data => {
        this.user = data;
        console.log(data);
      }, error => console.log(error)
    )
  }

  updateUser()
  {
    this.service.updateUser(this.id, this.user).subscribe(
      data => {
        console.log(data);
        this.loadData();
        this.toastrService.showSuccess("Update the successful information ^^");
        this.router.navigate(['user'])
      }, error => {
        console.log(error);
        this.toastrService.showError('failed to update information !');
      }
    )
  }

  onFireSelected(event: any)
  {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.pb = url;
            }
            this.srcImg = url;
            console.log(this.pb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }

  gotoList() {
    this.router.navigate(['user']);
  }
}

import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogService } from '../blog.service';
import { Blog } from '../blog';
import { finalize } from 'rxjs/operators';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements OnInit {

  blog: any;
  blogForm: any = FormGroup;
  selectedFile!: File;
  srcImg!: string;
  downloadURL!: Observable<string>;
  uploadPercent!: any;
  pb: any;
  id: any;
  constructor(
    private router: Router,
    private service: BlogService,
    private fb: FormBuilder,
    private storage: AngularFireStorage,
    private route: ActivatedRoute,
    private toastrService: NotificationService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.blog = new Blog();

    this.service.show(this.id).subscribe(
      data => {
        console.log(data);
        this.blog = data;
      }, error => console.log(error)
    )

    this.blogForm = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
    });
    console.log(this.blogForm);

  }

  editBlog()
  {
    this.blog.image = this.srcImg;
    this.service.edit(this.id, this.blog).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['blog']);
        this.toastrService.showSuccess("You have successfully updated ^^");
      }, error => {
        console.log(error)
        this.toastrService.showError("You have failed update!")
      }
    )
  }

  onSubmit()
  {
    console.log(this.blogForm.value);
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
      })
  }

  gotoList() {
    this.router.navigate(['blog']);
  }
}

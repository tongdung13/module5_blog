import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';
import { finalize } from 'rxjs/operators';
import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  blog: any;
  blogForm: any = FormGroup;
  selectedFile!: File;
  srcImg!: string;
  downloadURL!: Observable<string>;
  uploadPercent!: any;
  pb: any;
  constructor(
    private router: Router,
    private service: BlogService,
    private fb: FormBuilder,
    private storage: AngularFireStorage,
    private toasrt: ToastrService
  ) { }

  ngOnInit(): void {
    this.blog = new Blog();
    this.blogForm = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
    });
    console.log(this.blogForm);
  }

  createBlog()
  {
    this.blog.image = this.srcImg;
    console.log(this.blog);
    this.service.create(this.blog).subscribe(
      data => {
        console.log(data);
        this.showToasterSuccess();
        this.router.navigate(['blog']);
        this.blog = new Blog();
      }, error => console.log(error)
    );
  }
  showToasterSuccess() {
    this.toasrt.success('Đã thêm mới một nhà vào trong danh sách của bạn .', 'Thông báo !');
  }
  onSubmit()
  {
    console.log(this.blogForm.value);
  }

  onFireSelected(event: any)
  {
    let n = Date.now();
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
}




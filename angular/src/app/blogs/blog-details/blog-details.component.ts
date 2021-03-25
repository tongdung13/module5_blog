import {Component, OnInit} from '@angular/core';
import {BlogService} from 'src/app/blogs/blog.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Blog} from '../blog';
import {JwtService} from 'src/app/components/jwt.service';
import {FormGroup, FormControl} from '@angular/forms';
import {CommentService} from "../comment.service";
import {LikeService} from "../like.service";
import {User} from "../../components/user";


@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  blogs: any;
  id!: any;
  users: any;
  formGroup: any = FormGroup;
  // @ts-ignore
  post: Comment;
  count = 0;
  formComment = new FormGroup(
    {content: new FormControl('')}
  );
  data: any = {
    messeger: 'no'
  };
  status = '';
  check: boolean = true;
  comment: any;
  blog_id: any;
  comments: any;
  getLikeDislike: any;
  idUser: any;

  constructor(private service: BlogService,
              private router: Router,
              private route: ActivatedRoute,
              private userService: JwtService,
              private getcomment: CommentService,
              private getlike: LikeService,


  ) {
  }

  ngOnInit(): void {
    this.blogs = new Blog();
    this.id = this.route.snapshot.params.id;
    this.service.showPublic(this.id).subscribe(
      data => {
        console.log(data);
        this.blogs = data;
      }, error => console.log(error)
    );

    this.users = new User();
    this.idUser = this.route.snapshot.params.id;
    this.userService.showPublic(this.id).subscribe(
    data => {this.users = data; }
    );

    this.loadUser();
    this.creatCommentForm();
    this.reloadLikeDislike();
    // this.getPost();
    // this.prepareFormComment();
  }

  loadUser() {
    this.id = localStorage.getItem('id');
    this.userService.showPublic(this.id).subscribe(
      data => {
        console.log(data);
        this.users = data;
      }, error => console.log(error)
    )
  }


  // tslint:disable-next-line:typedef
  list() {
    this.router.navigate(['']);
  }



// Tính năng like
  reloadLikeDislike(): void {
    this.getlike.getLikeDisLike(this.blog_id).subscribe((data: any) => {
      this.getLikeDislike = data;
    }, error => console.log(error));
  }

  likedislike(likedislike: 'like' | 'dislike'): void {
    if (this.data.status) {
    } else {
      this.getlike.addLikeToSong(this.data.user.id, this.blog_id, likedislike).subscribe((dt: any) => {
        this.reloadLikeDislike();
      }, error => {
        console.log(error);
      });
    }
  }


// tính năng comment

  creatCommentForm() {
    this.formComment = new FormGroup(
      {content: new FormControl('')}
    );
  }

  createComment() {
    //fake data comment object
    let currentDate = new Date();
    // this.unknownId = 1;
    // @ts-ignore
    this.content = this.formComment.get('comment')?.value;
    // @ts-ignore
    this.id = this.route.snapshot.params.id;
    let comment: Comment = {
      // @ts-ignore
      user_id: this.idUser,
      //fake data postId
      blog_id: this.id,
      comment: this.formComment.get('content')?.value,
      createDate: currentDate
    };


    console.log(comment);
    this.getcomment.postComment(this.id,this.comments ).subscribe(
      result => {
        console.log('result', result)
        if (result != null) {
          this.displayAllComment(this.id);
          if (JSON.stringify(result) == JSON.stringify(this.data)) {
            this.status = 'KO CHO COMMENT';
            this.check = false;
          } else {
            this.check = true;
          }
        } else {
          this.status = 'KO CHO COMMENT';
          this.check = false;
        }
        this.formComment.reset();
      }, error => {
        console.log(error);
      }
    );

  }

  displayAllComment(id: number) {
    this.id = this.route.snapshot.params.id;
    // @ts-ignore
    this.getcomment.getComment(this.id).subscribe(
      result => {
        // @ts-ignore
        this.comment = result;
        // @ts-ignore
        this.count = this.comment.length;
      }, error => {
        console.log(error);
      }
    )
  }
}

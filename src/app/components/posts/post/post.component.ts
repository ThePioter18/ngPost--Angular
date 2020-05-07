import { Post } from './../../../shared/models/post.interface';
import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  // public post: {
  //   id: string;
  //   titlePost: string;
  //   contentPost: string;
  //   imagePost: string;
  // } = {
  //     id: '1',
  //     titlePost: 'Post',
  //     // tslint:disable-next-line:max-line-length
  //     imagePost: 'https://picsum.photos/800/800?grayscale'
  //   };

  public post: Post;

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.post.id = this.route.snapshot.params.id;
    const id = this.route.snapshot.params.id;

    this.postService.getOnePost(id).subscribe(onePost => {
      this.post = onePost;
    });
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }

}

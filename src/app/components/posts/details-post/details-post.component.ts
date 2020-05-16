import { Component, OnInit } from '@angular/core';
import { Post } from './../../../shared/models/post.interface';
import { PostService } from './../post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.css']
})
export class DetailsPostComponent implements OnInit {

  public post: Post;

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;

    this.postService.getOnePost(id).subscribe(onePost => {
      this.post = onePost;
    });
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }

}

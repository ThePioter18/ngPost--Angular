import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from './../post.service';
import { Post } from './../../../shared/models/post.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  private image: any;
  private imageOriginal: any;

  @Input() post: Post;

  constructor(private postService: PostService) { }

  public editPostForm = new FormGroup({
    id: new FormControl('', Validators.required),
    titlePost: new FormControl('', Validators.required),
    contentPost: new FormControl('', Validators.required),
    tagsPost: new FormControl('', Validators.required),
    imagePost: new FormControl('', Validators.required),

  });

  ngOnInit() {
    this.image = this.post.imagePost;
    this.imageOriginal = this.post.imagePost;
    this.initValuesForm();
  }

  editPost(post: Post) {
    if (this.image === this.imageOriginal) {
      post.imagePost = this.imageOriginal;
      this.postService.editPost(post);
    } else {
      this.postService.editPost(post, this.image);
    }
  }

  handleImage(event: any) {
    this.image = event.target.files[0];
  }

  private initValuesForm() {
    this.editPostForm.patchValue({
      id: this.post.id,
      titlePost: this.post.titlePost,
      contentPost: this.post.contentPost,
      tagsPost: this.post.tagsPost
    });
  }

}

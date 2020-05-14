import { Validators, FormGroup, FormControl } from '@angular/forms';
import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from './../../../shared/models/post.interface';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  private image: any;

  constructor(private postService: PostService) { }

  public newPostForm = new FormGroup({
    titlePost: new FormControl('', Validators.required),
    contentPost: new FormControl('', Validators.required),
    tagsPost: new FormControl('', Validators.required),
    imagePost: new FormControl('', Validators.required),
  });

  ngOnInit() {
  }

  addNewPost(data: Post) {
    this.postService.createPostAndUpdatePost(data, this.image);
  }

  handleImage(event: any) {
    this.image = event.target.files[0];
  }
}

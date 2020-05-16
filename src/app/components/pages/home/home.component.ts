import { Component, OnInit } from '@angular/core';
import { Post } from './../../../shared/models/post.interface';
import { PostService } from './../../posts/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getAllPosts().subscribe(allPosts => {
      this.posts = allPosts;
    });
  }

}

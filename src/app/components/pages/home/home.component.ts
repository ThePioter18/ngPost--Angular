import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from './../../posts/post.service';
import { Post } from './../../../shared/models/post.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public posts: Post[];

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.postService.getAllPosts().subscribe(allPosts => {
      this.posts = allPosts;
    });
  }

  viewPost(post) {
    this.router.navigate([`home/post/${post.id}`]);
  }

}

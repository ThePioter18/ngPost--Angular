import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from './../../posts/post.service';
import { Post } from './../../../shared/models/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  constructor(private router: Router) { }

  ngOnInit() { }

  viewPost(post) {
    this.router.navigate([`home/post/${post.id}`]);
  }
}

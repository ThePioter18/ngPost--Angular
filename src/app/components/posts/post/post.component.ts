import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public post: {
    id: string;
    titlePost: string;
    contentPost: string;
    imagePost: string;
  } = {
      id: '1',
      titlePost: 'Post',
      // tslint:disable-next-line:max-line-length
      contentPost: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae eleifend turpis. Etiam molestie elit id mi accumsan, ut viverra ipsum molestie. Quisque cursus luctus nulla, ac pharetra libero. Aliquam at justo lacinia, fringilla urna vel, vulputate odio. Fusce faucibus turpis nec purus sodales tempus. Proin a vestibulum risus. Mauris quis faucibus turpis, at sollicitudin augue. Donec quis mattis odio. Maecenas eget congue libero. Nullam id leo mattis, bibendum massa ut, commodo nulla. Etiam rhoncus blandit dapibus. Praesent enim dui, ultrices vitae lobortis id, lacinia quis elit. Etiam tempor accumsan nulla id consequat. Cras bibendum eros at mauris volutpat, ut vulputate nibh accumsan. Aliquam erat volutpat. Curabitur pulvinar augue elit, ac iaculis dui luctus porttitor.`,
      imagePost: 'https://picsum.photos/800/800?grayscale'
    };

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.post.id = this.route.snapshot.params.id;
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }

}

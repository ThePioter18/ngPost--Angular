import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public posts: {
    id: string;
    titlePost: string;
    contentPost: string;
    imagePost: string;
    tagsPost: string[];
  }[] = [
      {
        id: '1',
        titlePost: 'Post One',
        // tslint:disable-next-line:max-line-length
        contentPost: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae eleifend turpis. Etiam molestie elit id mi accumsan, ut viverra ipsum molestie. Quisque cursus luctus nulla, ac pharetra libero. Aliquam at justo lacinia, fringilla urna vel, vulputate odio. Fusce faucibus turpis nec purus sodales tempus. Proin a vestibulum risus. Mauris quis faucibus turpis, at sollicitudin augue. Donec quis mattis odio. Maecenas eget congue libero. Nullam id leo mattis, bibendum massa ut, commodo nulla. Etiam rhoncus blandit dapibus. Praesent enim dui, ultrices vitae lobortis id, lacinia quis elit. Etiam tempor accumsan nulla id consequat. Cras bibendum eros at mauris volutpat, ut vulputate nibh accumsan. Aliquam erat volutpat. Curabitur pulvinar augue elit, ac iaculis dui luctus porttitor.`,
        imagePost: 'https://picsum.photos/400/400?grayscale',
        tagsPost: ['Angular', 'description']
      },
      {
        id: '2',
        titlePost: 'Post Two',
        // tslint:disable-next-line:max-line-length
        contentPost: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae eleifend turpis. Etiam molestie elit id mi accumsan, ut viverra ipsum molestie. Quisque cursus luctus nulla, ac pharetra libero. Aliquam at justo lacinia, fringilla urna vel, vulputate odio. Fusce faucibus turpis nec purus sodales tempus. Proin a vestibulum risus. Mauris quis faucibus turpis, at sollicitudin augue. Donec quis mattis odio. Maecenas eget congue libero. Nullam id leo mattis, bibendum massa ut, commodo nulla. Etiam rhoncus blandit dapibus. Praesent enim dui, ultrices vitae lobortis id, lacinia quis elit. Etiam tempor accumsan nulla id consequat. Cras bibendum eros at mauris volutpat, ut vulputate nibh accumsan. Aliquam erat volutpat. Curabitur pulvinar augue elit, ac iaculis dui luctus porttitor.`,
        imagePost: 'https://picsum.photos/400/400?grayscale',
        tagsPost: ['TypeScript', 'code']

      },
      {
        id: '3',
        titlePost: 'Post Three',
        // tslint:disable-next-line:max-line-length
        contentPost: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae eleifend turpis. Etiam molestie elit id mi accumsan, ut viverra ipsum molestie. Quisque cursus luctus nulla, ac pharetra libero. Aliquam at justo lacinia, fringilla urna vel, vulputate odio. Fusce faucibus turpis nec purus sodales tempus. Proin a vestibulum risus. Mauris quis faucibus turpis, at sollicitudin augue. Donec quis mattis odio. Maecenas eget congue libero. Nullam id leo mattis, bibendum massa ut, commodo nulla. Etiam rhoncus blandit dapibus. Praesent enim dui, ultrices vitae lobortis id, lacinia quis elit. Etiam tempor accumsan nulla id consequat. Cras bibendum eros at mauris volutpat, ut vulputate nibh accumsan. Aliquam erat volutpat. Curabitur pulvinar augue elit, ac iaculis dui luctus porttitor.`,
        imagePost: 'https://picsum.photos/400/400?grayscale',
        tagsPost: ['AngularCLI', 'description']

      },
      {
        id: '4',
        titlePost: 'Post Four',
        // tslint:disable-next-line:max-line-length
        contentPost: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae eleifend turpis. Etiam molestie elit id mi accumsan, ut viverra ipsum molestie. Quisque cursus luctus nulla, ac pharetra libero. Aliquam at justo lacinia, fringilla urna vel, vulputate odio. Fusce faucibus turpis nec purus sodales tempus. Proin a vestibulum risus. Mauris quis faucibus turpis, at sollicitudin augue. Donec quis mattis odio. Maecenas eget congue libero. Nullam id leo mattis, bibendum massa ut, commodo nulla. Etiam rhoncus blandit dapibus. Praesent enim dui, ultrices vitae lobortis id, lacinia quis elit. Etiam tempor accumsan nulla id consequat. Cras bibendum eros at mauris volutpat, ut vulputate nibh accumsan. Aliquam erat volutpat. Curabitur pulvinar augue elit, ac iaculis dui luctus porttitor.`,
        imagePost: 'https://picsum.photos/400/400?grayscale',
        tagsPost: ['Firebase', 'description']

      }
    ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewPost(post) {
    this.router.navigate([`home/post/${post.id}`]);
  }

}

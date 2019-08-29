import {Component, OnInit} from '@angular/core';
import {InstagramService} from "../instagram.service";

@Component({
  selector: 'home-feed-instagram',
  templateUrl: './feed-instagram.component.html',
  styleUrls: ['./feed-instagram.component.scss']
})
export class FeedInstagramComponent implements OnInit {

  posts = [];

  constructor(private instagramService: InstagramService) {
  }

  ngOnInit() {
    this.instagramService.getFeed('nato____potato')
      .subscribe(value => {
        value.request.subscribe(post => {
          this.posts[value.i] = (post.html);
          // @ts-ignore
          window.instgrm.Embeds.process();
        })
      })
  }

}

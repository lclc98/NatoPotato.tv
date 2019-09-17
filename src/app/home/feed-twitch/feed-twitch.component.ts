import {Component, OnInit} from '@angular/core';
import {TwitchService} from '../../twitch.service';

@Component({
  selector: 'app-feed-twitch',
  templateUrl: './feed-twitch.component.html',
  styleUrls: ['./feed-twitch.component.scss']
})
export class FeedTwitchComponent implements OnInit {

  posts: string[] = [];

  constructor(private twitchService: TwitchService) {
  }

  ngOnInit() {
    this.twitchService.getUserByName(this.twitchService.channel).subscribe(user => {
      this.twitchService.getVideosByUser(user.id, {type: 'archive', limit: '2'}).subscribe(helixVideo => {
        const videos = helixVideo.data;
        videos.length = 2;
        videos.forEach(video => {
          this.posts.push('https://player.twitch.tv/?video=v' + video.id + '&autoplay=false');
        });
      });
    });
  }
}

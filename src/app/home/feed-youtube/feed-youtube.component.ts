import {Component, OnInit} from '@angular/core';
import {YoutubeService} from '../youtube.service';

@Component({
  selector: 'app-feed-youtube',
  templateUrl: './feed-youtube.component.html',
  styleUrls: ['./feed-youtube.component.scss']
})
export class FeedYoutubeComponent implements OnInit {

  videos = [];

  constructor(private youtubeService: YoutubeService) {
  }

  ngOnInit() {
    this.youtubeService.getPlaylist('UURuM4_srnCdgGN50IlJxNBQ')
      .subscribe(value => {
        if ('items' in value) {
          // @ts-ignore
          this.videos = value.items;
        }
      });
  }

}

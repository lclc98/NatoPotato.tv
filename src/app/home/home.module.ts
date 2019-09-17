import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedInstagramComponent} from './feed-instagram/feed-instagram.component';
import {FeedTwitchComponent} from './feed-twitch/feed-twitch.component';
import {FeedTwitterComponent} from './feed-twitter/feed-twitter.component';
import {FeedYoutubeComponent} from './feed-youtube/feed-youtube.component';
import {HomeComponent} from './home.component';
import {CardComponent} from './card/card.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {CountdownModule} from 'ngx-countdown';
import {CookieService} from 'ngx-cookie-service';
import {HomeRoutingModule} from './home-routing.module';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    ScheduleComponent,
    FeedInstagramComponent,
    FeedTwitchComponent,
    FeedTwitterComponent,
    FeedYoutubeComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    SharedModule,
    CountdownModule,
    HomeRoutingModule,
  ],
  providers: [CookieService],
  bootstrap: [HomeComponent]
})
export class HomeModule {
}

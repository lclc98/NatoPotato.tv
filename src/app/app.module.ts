import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NavComponent} from './nav/nav.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CountdownModule} from 'ngx-countdown';
import {CookieService} from 'ngx-cookie-service';
import {FeedYoutubeComponent} from './feed-youtube/feed-youtube.component';
import {FeedTwitchComponent} from './feed-twitch/feed-twitch.component';
import {FeedTwitterComponent} from './feed-twitter/feed-twitter.component';
import {FeedInstagramComponent} from './feed-instagram/feed-instagram.component';
import {HttpClientModule} from "@angular/common/http";
import {SafePipe} from './safe.pipe';
import {CardComponent} from './card/card.component';
import { SponsorsComponent } from './sponsors/sponsors.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ScheduleComponent,
    FeedYoutubeComponent,
    FeedTwitchComponent,
    FeedTwitterComponent,
    FeedInstagramComponent,
    SafePipe,
    CardComponent,
    SponsorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CountdownModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

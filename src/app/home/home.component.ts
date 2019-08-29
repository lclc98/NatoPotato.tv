import {Component, OnInit} from '@angular/core';
import {
  faDiscord,
  faFacebookSquare,
  faInstagram,
  faTwitch,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import {faAngleDown, faAngleUp, faCircle, faEnvelope, faTshirt} from '@fortawesome/free-solid-svg-icons';
import {TwitchService} from '../twitch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  live = false;
  faTwitch = faTwitch;
  faYoutube = faYoutube;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faFacebook = faFacebookSquare;
  faDiscord = faDiscord;
  faTshirt = faTshirt;
  faEnvelope = faEnvelope;
  faCircle = faCircle;

  constructor(private twitchService: TwitchService) {
  }

  ngOnInit() {
    this.twitchService.getStream().subscribe(stream => this.live = stream != null);
  }

}

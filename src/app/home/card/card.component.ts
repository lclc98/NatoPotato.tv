import {Component, Input, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;

  @Input()
  title: string;
  show = true;

  constructor(private cookieService: CookieService) {
  }

  ngOnInit() {
    if (this.cookieService.check(this.title.toLowerCase())) {
      this.show = this.cookieService.get(this.title.toLowerCase()) === 'true';
    }
  }

  showHide() {
    this.show = !this.show;
    this.cookieService.set(this.title.toLowerCase(), String(this.show));
  }
}

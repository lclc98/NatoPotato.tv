import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'natopotato';
  navbarOpen = false;

  onClickNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}

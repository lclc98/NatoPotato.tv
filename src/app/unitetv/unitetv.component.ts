import {Component, OnInit} from '@angular/core';
import {TwitchService} from '../twitch.service';
import {faCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-unitetv',
  templateUrl: './unitetv.html',
  styleUrls: ['./unitetv.component.scss']
})
export class UnitetvComponent implements OnInit {

  users = [];
  selected = undefined;
  faCircle = faCircle;

  constructor(private twitchService: TwitchService) {
  }

  ngOnInit() {
    const tempUserIds = [];
    const teamUsers = [];
    const live = [];
    this.twitchService.getTeamUsers('unitetv').subscribe(users => {
      for (const user of users) {
        tempUserIds.push(user.id);
        teamUsers.push({
          userId: user.id,
          username: user.name,
          displayName: user.displayName,
          logo: user.logoUrl,
          live: false,
          viewers: 0
        });
      }
      const chunkSize = 100;
      const userIds = tempUserIds.map((value, index) => index % chunkSize === 0 ? tempUserIds.slice(index, index + chunkSize) : null)
        .filter(value => value);
      for (const userId of userIds) {
        this.twitchService.getStreamPaginated({userId}).subscribe(streams => {
          for (const stream of streams) {
            const objIndex = teamUsers.findIndex((obj => obj.userId === stream.userId));
            teamUsers[objIndex].live = true;
            teamUsers[objIndex].viewers = stream.viewers;
            live.push(teamUsers[objIndex]);
          }
          this.users = teamUsers.sort((a, b) => {
            if (a.live === b.live) {
              return a.live ? b.viewers - a.viewers : 0;
            }
            return a.live ? -1 : 1;
          });

          this.selected = live[Math.floor(Math.random() * (live.length + 1))];
        });
      }
    });
  }

  onClick(user) {
    this.selected = user;
  }
}

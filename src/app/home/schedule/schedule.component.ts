import {Component, OnInit} from '@angular/core';
import {ChronoUnit, DateTimeFormatter, ZonedDateTime, ZoneId} from '@js-joda/core';
import '@js-joda/timezone/dist/js-joda-timezone-2012-2022.min';
import {faCircle} from '@fortawesome/free-solid-svg-icons';
import schedule from './schedule.js';
import {TwitchService} from "../../twitch.service";

@Component({
  selector: 'home-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  live = false;
  next = undefined;
  timezone = '';
  schedule = {};
  faCircle = faCircle;

  constructor(private twitchService: TwitchService) {
  }

  ngOnInit() {
    this.handleTime();
  }

  handleTime() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const now = ZonedDateTime.now();
    let nextLive = ZonedDateTime.now()
      .plusMonths(1);
    const timezone = ZoneId.systemDefault();
    const fromTimezone = ZoneId.of(schedule.timezone);
    days.forEach((day) => {
      if (schedule.enabled[day]) {
        schedule[day].forEach((t) => {
          const dayOfWeek = ((days.indexOf(day) - 1) % 7) + 1;
          let data = now.withHour(t.HH).withMinute(t.mm).withZoneSameLocal(fromTimezone);
          data = data.plusDays(dayOfWeek - data.dayOfWeek().value());
          let converted = data.withZoneSameInstant(timezone);
          if (converted.isBefore(now)) {
            converted = converted.plusWeeks(1);
          }
          if (now.until(converted, ChronoUnit.MILLIS) < now.until(nextLive, ChronoUnit.MILLIS)) {
            nextLive = converted;
          }
          const dayName = converted.dayOfWeek().name();
          let dayData = this.schedule[dayName];
          if (!dayData) {
            dayData = [];
          }
          dayData.push(`${converted.format(DateTimeFormatter.ofPattern('hh:mm'))} ${converted.hour() > 12 ? 'PM' : 'AM'}`);
          this.schedule[dayName] = dayData;
          // Vue.set(this.schedule, dayName, dayData);
        });
      }
    });
    this.next = now.until(nextLive, ChronoUnit.SECONDS);
    this.timezone = timezone.toString();
    this.twitchService.getStream().subscribe(stream => this.live = stream != null    );
  }

  finish() {
    this.schedule = {};
    this.handleTime();
  }
}

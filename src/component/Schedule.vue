<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Schedule</p>
    </header>
    <div class="card-content">
      <div v-if="live" class="has-text-centered">
        <h1 class="title">
          <router-link class="is-hidden-touch" to="/live">
            <span class="icon has-text-danger"><i class="fas fa-circle"></i></span> NOW LIVE
          </router-link>
          <a class="is-hidden-desktop" href="twitch://stream/natopotato">
            <span class="icon has-text-danger"><i class="fas fa-circle"></i></span> NOW LIVE
          </a>
        </h1>
      </div>
      <div v-else-if="next" class="columns">
        <div class="column is-half-desktop is-offset-one-quarter-desktop is-full-mobile">
          <h1 class="title has-text-centered">Live in:</h1>
          <countdown :key="next" :left-time="next" @onFinish="finish">
            <span slot="process" slot-scope="{ timeObj }">
              <nav class="level is-mobile has-text-centered is-centered">
                <div class="level-item">
                  <div>
                    <p class="heading is-uppercase has-text-info">Days</p>
                    <p class="title">{{timeObj.d}}</p>
                  </div>
                </div>
                <div class="level-item">
                  <div>
                    <p class="heading is-uppercase has-text-info">Hours</p>
                    <p class="title">{{timeObj.h}}</p>
                  </div>
                </div>
                <div class="level-item">
                  <div>
                    <p class="heading is-uppercase has-text-info">Minutes</p>
                    <p class="title">{{timeObj.m}}</p>
                  </div>
                </div>
                <div class="level-item">
                  <div>
                    <p class="heading is-uppercase has-text-info">Seconds</p>
                    <p class="title">{{timeObj.s}}</p>
                  </div>
                </div>
              </nav>
            </span>
            <span slot="finish"></span>
          </countdown>
        </div>
      </div>
      <div>
        <nav class="level tablet">
          <div class="level-item has-text-centered" v-for="(item, i) in schedule" v-bind:key="i">
            <div>
              <p class="heading is-uppercase has-text-info">{{i.substr(0,3)}}</p>
              <p class="title is-size-6" v-for="(time, index) in item" v-bind:key="index">
                {{time}}
              </p>
            </div>
          </div>
        </nav>
      </div>
      <br>
      <div v-if="timezone" class="has-text-centered">
        Times shown in {{timezone}}
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  DateTimeFormatter, ZonedDateTime, ZoneId, ChronoUnit,
} from '@js-joda/core';
import '@js-joda/timezone/dist/js-joda-timezone-2012-2022.min';

const schedule = require('../assets/schedule.json');

export default {
  name: 'Schedule',
  props: ['live', 'channel'],
  data() {
    return {
      schedule: {},
      next: undefined,
      timezone: undefined,
    };
  },
  mounted() {
    this.handleTime();
  },
  methods: {
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

            Vue.set(this.schedule, dayName, dayData);
          });
        }
      });
      this.next = now.until(nextLive, ChronoUnit.MILLIS);
      this.timezone = timezone.toString();
    },
    finish() {
      this.schedule = {};
      this.handleTime();
    },
  },
};
</script>

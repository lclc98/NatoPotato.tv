<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Schedule</p>
    </header>
    <div class="card-content">
      <div v-if="live" class="has-text-centered">
        <h1 class="title">
          <span class="icon has-text-danger"><i class="fas fa-circle"></i></span> NOW LIVE
        </h1>
      </div>
      <div v-else-if="next" class="columns">
        <div class="column is-half-desktop is-offset-one-quarter-desktop is-full-mobile">
          <h1 class="title has-text-centered">Live in:</h1>
          <countdown :key="next.toString()" :end-time="next" @onFinish="finish">
            <span slot="process" slot-scope="{ timeObj }">
              <nav class="level is-mobile has-text-centered is-centered">
                <div class="level-item">
                  <div>
                    <p class="heading has-text-info">Days</p>
                    <p class="title">{{timeObj.d}}</p>
                  </div>
                </div>
                <div class="level-item">
                  <div>
                    <p class="heading has-text-info">Hours</p>
                    <p class="title">{{timeObj.h}}</p>
                  </div>
                </div>
                <div class="level-item">
                  <div>
                    <p class="heading has-text-info">Minutes</p>
                    <p class="title">{{timeObj.m}}</p>
                  </div>
                </div>
                <div class="level-item">
                  <div>
                    <p class="heading has-text-info">Seconds</p>
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
              <p class="heading has-text-info">{{i.substr(0,3)}}</p>
              <p class="title is-size-6" v-for="(time, index) in item" v-bind:key="index">
                {{time}}
              </p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import moment from 'moment-timezone';

const schedule = require('../assets/schedule.json');

export default {
  name: 'Schedule',
  props: ['live'],
  data() {
    return {
      schedule: {},
      next: undefined,
    };
  },
  mounted() {
    this.handleTime();
  },
  methods: {
    handleTime() {
      const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
      const now = moment.tz(moment.tz.guess());
      let nextLive = moment.tz(moment.tz.guess())
        .add(1, 'months');

      days.forEach((day) => {
        if (schedule.enabled[day]) {
          schedule[day].forEach((hour) => {
            const data = moment.tz({
              h: hour.HH,
              m: hour.mm,
            }, schedule.timezone)
              .day(day);
            let converted = data.tz(moment.tz.guess());
            if (converted.diff(now) < 0) {
              converted = converted.add(1, 'weeks');
            }
            if (converted.diff(now) < nextLive.diff(now)) {
              nextLive = converted;
            }

            const dayName = days[converted.get('day')];
            let dayData = this.schedule[dayName];
            if (!dayData) {
              dayData = [];
            }
            dayData.push(converted.format('hh:mm A'));

            Vue.set(this.schedule, dayName, dayData);
          });
        }
      });
      this.next = nextLive.toDate();
    },
    finish() {
      this.schedule = {};
      this.handleTime();
    },
  },
};
</script>

<style scoped>
  .is-full-mobile {
    padding: 0;
  }
</style>
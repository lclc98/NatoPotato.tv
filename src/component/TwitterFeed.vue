<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Twitter
      </p>
      <a @click="showHide" class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fas" :class="show ? 'fa-angle-down' : 'fa-angle-up'" aria-hidden="true"></i>
        </span>
      </a>
    </header>
    <div v-show="show" class="card-content">
      <div class="content">
        <Timeline id="NatooPotatoo" sourceType="profile" :options="{ tweetLimit: '3'}">
          Loading twitter...
        </Timeline>
      </div>
    </div>
  </div>
</template>

<script>
import { Timeline } from 'vue-tweet-embed';

export default {
  name: 'TwitterFeed',
  components: { Timeline },
  data() {
    let show = true;
    if (this.$cookies.isKey('twitter')) {
      show = this.$cookies.get('twitter') === 'true';
    }
    return { show };
  },
  methods: {
    showHide() {
      this.show = !this.show;
      this.$cookies.set('twitter', this.show, '1m');
    },
  },
};
</script>

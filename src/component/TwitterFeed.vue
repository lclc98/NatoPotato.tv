<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Twitter
      </p>
      <a @click="showHide" class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </a>
    </header>
    <div v-show="show" class="card-content">
      <div class="content">
        <Timeline id="NatooPotatoo" sourceType="profile" :options="{ tweetLimit: '3', theme:'dark'}">
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
    let show = this.$cookie.get('twitter');
    show = show === undefined || show === 'true';
    return { show };
  },
  methods: {
    showHide() {
      this.show = !this.show;
      this.$cookie.set('twitter', this.show, { expires: '1M' });
    },
  },
};
</script>

<style scoped>

</style>

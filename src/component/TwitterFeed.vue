<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Twitter
      </p>
      <a href="#" class="card-header-icon" aria-label="more options">
                  <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
      </a>
    </header>
    <div class="card-content">
      <div class="content">
        <Timeline id="NatooPotatoo" sourceType="profile" :options="{ tweetLimit: '3', theme:'dark'}">
          Loading twitter...
        </Timeline>
      </div>
    </div>
  </div>
  <!--  TODO HANDLE COLLAPSING-->
</template>

<script>
import { Timeline } from 'vue-tweet-embed';

export default {
  name: 'TwitterFeed',
  components: { Timeline },
};
</script>

<style scoped>

</style>

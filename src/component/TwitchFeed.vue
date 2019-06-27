<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Previous Streams
      </p>
      <a @click="showHide" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas" :class="show ? 'fa-angle-down' : 'fa-angle-up'" aria-hidden="true"></i>
          </span>
      </a>
    </header>
    <div v-show="show" class="card-content">
      <div class="content">
        <div class="columns">
          <template v-for="(item, index) in posts">
            <div v-bind:key="index" class="column is-half">
              <div class="aspect-ratio">
                <iframe class="aspect-ratio"
                        :src="`https://player.twitch.tv/?video=v${item._data.url.replace('https://www.twitch.tv/videos/','')}&autoplay=false`"
                        allowfullscreen="true"
                        scrolling="no"></iframe>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

const TwitchClient = require('twitch').default;

let twitchClient;
export default {
  name: 'TwitchFeed',
  props: ['channel'],
  data() {
    let show = true;
    if (this.$cookies.isKey('twitch')) {
      show = this.$cookies.get('twitch') === 'true';
    }
    return { posts: [], show };
  },
  async mounted() {
    twitchClient = await TwitchClient.withCredentials(process.env.VUE_APP_CLIENT_ID);
    const user = await twitchClient.helix.users.getUserByName(this.channel);
    this.posts = await twitchClient.helix.videos.getVideosByUserPaginated(user.id, { type: 'archive', first: 2 }).getAll();
    this.posts.length = 2;
  },
  methods: {
    showHide() {
      this.show = !this.show;
      this.$cookies.set('twitch', this.show, '1m');
    },
  },
};
</script>

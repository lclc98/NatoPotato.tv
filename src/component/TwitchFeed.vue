<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Twitch VODS
      </p>
      <a href="#" class="card-header-icon" aria-label="more options">
                  <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
      </a>
    </header>
    <div class="card-content">
      <div class="content">
        <div class="columns">
          <template v-for="(item, index) in posts">
            <div v-bind:key="index" class="column is-half">
              <div class="container">
                <iframe class="video"
                        :src="`https://player.twitch.tv/?video=v${item._data.url.replace('https://www.twitch.tv/videos/','')}&autoplay=false`"
                        allowfullscreen="true"
                        scrolling="no" width="100%" height="100%"></iframe>
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
      return { posts: [] };
    },
    async mounted() {
      twitchClient = await TwitchClient.withCredentials(process.env.VUE_APP_CLIENT_ID);
      const user = await twitchClient.helix.users.getUserByName(this.channel);
      this.posts = await twitchClient.helix.videos.getVideosByUser(user.id, {
        type: 'archive',
        first: 3,
      })
        .getAll();
      this.posts.length = 2;
    },
  };
</script>

<style scoped>
  .container {
    width: 100%;
    padding-top: 60%; /* 16:9 Aspect Ratio */
    position: relative; /* If you want text inside of it */
  }

  .video {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding-bottom: 15px;
  }
</style>

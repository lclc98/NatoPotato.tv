<template>
  <div class="section">
    <div class="columns">
      <div class="column size15"></div>
      <div class="column size70">
        <!-- Main container -->
        <nav class="level">
          <!-- Left side -->
          <div class="level-left">
            <p class="level-item">
              <a href="https://www.twitch.tv/natopotato">
                <span class="icon is-large has-text-white"><i class="fab fa-2x fa-twitch"></i></span>
              </a>
            </p>
            <p class="level-item">
              <a href="https://discord.gg/2QVCUV6">
                <span class="icon is-large has-text-white"><i class="fab fa-2x fa-discord"></i></span>
              </a>
            </p>
            <p class="level-item">
              <a href="https://twitter.com/NatooPotatoo">
                <span class="icon is-large has-text-white"><i class="fab fa-2x fa-twitter"></i></span>
              </a>
            </p>
            <p class="level-item">
              <a href="https://www.youtube.com/user/NatoPotatoOfficial/">
                <span class="icon is-large has-text-white"><i class="fab fa-2x fa-youtube"></i></span>
              </a>
            </p>
            <p class="level-item">
              <a href="https://www.instagram.com/nato____potato/">
                <span class="icon is-large has-text-white"><i class="fab fa-2x fa-instagram"></i></span>
              </a>
            </p>
            <p class="level-item">
              <a href="https://www.facebook.com/natopotatoofficial/">
                <span class="icon is-large has-text-white"><i class="fab fa-2x fa-facebook-square"></i></span>
              </a>
            </p>
          </div>

          <!-- Right side -->
          <div class="level-right">
          </div>
        </nav>

        <div class="">
          <div class="columns">
            <div class="column"></div>
            <div class="column is-flex" style="justify-content: center;">
              <figure class="image is-256x256">
                <img class="is-rounded" style="border: 4px solid white;" src="../assets/profile.jpg">
              </figure>
            </div>
            <div class="column"></div>
          </div>
        </div>
        <br>
        <div class="has-text-centered">
          <h1 class="title">NatoPotato</h1>
        </div>
        <div class="has-text-centered">
          <h2 class="subtitle">This is an example bio</h2>
        </div>

        <br>
        <br>
        <div v-if="live" class="card">
          <header class="card-header">
            <p class="card-header-title">
              <span class="icon has-text-danger">
                <i class="fas fa-circle"></i>
              </span>
              Live
            </p>
          </header>
          <div class="card-content">
            <div class="columns">
              <div class="column container" style="flex: none; width: 75%">
                <iframe class="video" :src="`https://player.twitch.tv/?channel=${channel}&muted=true`" frameborder="0"
                        allowfullscreen="true"
                        scrolling="no" width="100%" height="100%"></iframe>
              </div>
              <div class="column" style="flex: none; width: 25%; padding-top: 0; padding-bottom: 0">
                <iframe :src="`https://www.twitch.tv/embed/${channel}/chat`" frameborder="0" scrolling="no" width="100%"
                        height="100%" style="height:100%"></iframe>
              </div>
            </div>
          </div>
        </div>

        <br>
        <Schedule :live="live"></Schedule>
        <br>

        <TwitchFeed :channel="channel"></TwitchFeed>
        <br>
        <div class="columns">
          <div class="column is-one-third">
            <YoutubeVideos></YoutubeVideos>
          </div>
          <div class="column is-one-third">
            <TwitterFeed></TwitterFeed>
          </div>
          <div class="column is-one-third">
            <InstagramFeed></InstagramFeed>
          </div>
        </div>
      </div>
      <div class="column size15"></div>
    </div>
  </div>
</template>

<script>
import YoutubeVideos from '../component/YoutubeVideos.vue';
import TwitterFeed from '../component/TwitterFeed.vue';
import InstagramFeed from '../component/InstagramFeed.vue';
import TwitchFeed from '../component/TwitchFeed.vue';
import Schedule from '../component/Schedule.vue';

const TwitchClient = require('twitch').default;

export default {
  name: 'home',
  components: {
    Schedule,
    TwitchFeed,
    InstagramFeed,
    TwitterFeed,
    YoutubeVideos,
  },
  data() {
    return {
      live: false,
      channel: 'natopotato',
    };
  },

  mounted() {
    TwitchClient.withCredentials(process.env.VUE_APP_CLIENT_ID).then((twitchClient) => {
      twitchClient.helix.users.getUserByName(this.channel).then((user) => {
        if (user) {
          twitchClient.helix.streams.getStreamByUserId(user.id).then((stream) => {
            this.live = stream != null;
          });
        }
      });
    });
  },
};
</script>

<style scoped>
  .container {
    width: 100%;
    padding-top: 41.4444%;
    position: relative;
  }

  .video {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height:100%
  }

  .column.size70 {
    flex: none;
    width: 70%;
  }

  .column.size15 {
    flex: none;
    width: 15%;
  }

  .image.is-256x256 {
    height: 256px;
    width: 256px;
  }

</style>

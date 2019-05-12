<template>
  <div class="section">
    <div class="columns">
      <div class="column is-one-fifth"></div>
      <div class="column is-three-fifths">
        <!-- Main container -->
        <nav class="level">
          <!-- Left side -->
          <div class="level-left">
            <p class="level-item">
              <a href="https://www.twitch.tv/natopotato">
                <span class="icon is-large"><i class="fab fa-2x fa-twitch"></i></span>
              </a>
            </p>
            <p class="level-item">
              <a href="https://discord.gg/2QVCUV6">
                <span class="icon is-large"><i class="fab fa-2x fa-discord"></i></span>
              </a>
            </p>
            <p class="level-item">
              <a href="https://twitter.com/NatooPotatoo">
                <span class="icon is-large"><i class="fab fa-2x fa-twitter"></i></span>
              </a>
            </p>
            <p class="level-item">
              <a href="https://www.youtube.com/user/NatoPotatoOfficial/">
                <span class="icon is-large"><i class="fab fa-2x fa-youtube"></i></span>
              </a>
            </p>
            <p class="level-item">
              <a href="https://www.instagram.com/nato____potato/">
                <span class="icon is-large"><i class="fab fa-2x fa-instagram"></i></span>
              </a>
            </p>
            <p class="level-item">
              <a href="https://www.facebook.com/natopotatoofficial/">
                <span class="icon is-large"><i class="fab fa-2x fa-facebook-square"></i></span>
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
              <figure class="image is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png">
              </figure>
            </div>
            <div class="column"></div>
          </div>
        </div>

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
              <div class="column is-four-fifths">
                <iframe :src="`https://player.twitch.tv/?channel=${channel}`" frameborder="0" allowfullscreen="true"
                        scrolling="no" style="height: 100%; width: 100%" muted="true"></iframe>
              </div>
              <div class="column is-two-fifths">
                <iframe :src="`https://www.twitch.tv/embed/${channel}/chat`" frameborder="0" scrolling="no"
                        style="width: 100%;" height="500"></iframe>
              </div>
            </div>
          </div>
        </div>

        <div class="title is-1">
          SCHEDULE
        </div>
        <div class="columns">
          <div class="column is-one-third">
            <YoutubeVideos></YoutubeVideos>
          </div>
          <div class="column is-one-third">
            <TwitterFeed></TwitterFeed>
          </div>
          <div class="column is-one-third">

          </div>
        </div>
      </div>
    </div>
    <div class="column is-one-fifth"></div>
  </div>
</template>

<script>
import YoutubeVideos from '../component/YoutubeVideos.vue';
import TwitterFeed from '../component/TwitterFeed.vue';

const TwitchClient = require('twitch').default;

let twitchClient;
export default {
  name: 'home',
  components: { TwitterFeed, YoutubeVideos },
  data() {
    return {
      live: false,
      channel: 'natopotato',
    };
  },

  async mounted() {
    twitchClient = await TwitchClient.withClientCredentials(process.env.VUE_APP_CLIENT_ID);
    this.live = await this.isStreamLive(this.channel);
  },
  methods: {
    async isStreamLive(userName) {
      try {
        const user = await twitchClient.helix.users.getUserByName(userName);
        return await twitchClient.helix.streams.getStreamByUserId(user.id);
      } catch (e) {
        return false;
      }
    },
  },
};
</script>


<style>
  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .video-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 25px;
    height: 0;
  }
</style>

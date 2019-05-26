<template>
  <div class="section">
    <div class="columns is-mobile">
      <div class="column is-eight-tenths is-offset-one-tenth-desktop is-offset-one-tenth-tablet">
        <nav class="level is-mobile">
          <div class="level-left">
            <p class="level-item ">
              <a class="is-hidden-touch" href="https://www.twitch.tv/natopotato">
                <span class="icon is-medium has-text-white">
                  <i class="fab fa-2x fa-twitch"></i>
                </span>
              </a>
              <a class="is-hidden-desktop" href="twitch://stream/natopotato">
                <span class="icon is-medium has-text-white">
                  <i class="fab fa-2x fa-twitch"></i>
                </span>
              </a>
            </p>
            <p class="level-item">
              <a href="https://www.youtube.com/user/NatoPotatoOfficial/">
                <span class="icon is-medium has-text-white">
                  <i class="fab fa-2x fa-youtube"></i>
                </span>
              </a>
            </p>
            <p class="level-item">
              <a href="https://twitter.com/NatooPotatoo">
                <span class="icon is-medium has-text-white">
                  <i class="fab fa-2x fa-twitter"></i>
                </span>
              </a>
            </p>
            <p class="level-item">
              <a href="https://www.instagram.com/nato____potato/">
                <span class="icon is-medium has-text-white">
                  <i class="fab fa-2x fa-instagram"></i>
                </span>
              </a>
            </p>
            <p class="level-item">
              <a href="https://www.facebook.com/natopotatoofficial/">
                <span class="icon is-medium has-text-white">
                  <i class="fab fa-2x fa-facebook-square"></i>
                </span>
              </a>
            </p>
            <p class="level-item">
              <a href="https://discord.gg/2QVCUV6">
                <span class="icon is-medium has-text-white">
                  <i class="fab fa-2x fa-discord"></i>
                </span>
              </a>
            </p>
            <p class="level-item">
              <a href="https://shop.spreadshirt.com/natopotato">
                <span class="icon is-medium has-text-white">
                  <i class="fas fa-2x fa-tshirt"></i>
                </span>
              </a>
            </p>
            <p class="level-item">
              <a href="mailto:natopotato.official@gmail.com">
                <span class="icon is-medium has-text-white">
                  <i class="fas fa-2x fa-envelope"></i>
                </span>
              </a>
            </p>
          </div>
        </nav>
      </div>
    </div>
    <div class="columns is-mobile">
      <div class="column is-eight-tenths-desktop is-offset-one-tenth-desktop is-full-touch">
        <div class="column is-flex" style="justify-content: center;">
          <figure class="image is-256x256">
            <img class="is-rounded" style="border: 4px solid white;" src="../assets/profile.jpg">
          </figure>
        </div>

        <div class="columns is-mobile">
          <div class="column">
            <div class="has-text-centered">
              <h1 class="title">NatoPotato</h1>
            </div>
            <div class="has-text-centered">
              <h2 class="subtitle">This is an example bio</h2>
            </div>
          </div>
        </div>
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

        <Schedule :live="live"></Schedule>
        <br>

        <TwitchFeed class="is-hidden-mobile" :channel="channel"></TwitchFeed>
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

  .column.is-eight-tenths {
    flex: none;
    width: 80%;
  }

  @media screen and (min-width: 769px), print {
    .column.is-offset-one-tenth-tablet {
      margin-left: 10%;
    }
  }

  @media screen and (min-width: 1024px) {
    .column.is-eight-tenths-desktop {
      flex: none;
      width: 80%;
    }

    .column.is-offset-one-tenth-desktop {
      margin-left: 10%;
    }
  }

  .column.is-offset-one-tenth {
    margin-left: 10%;
  }

  .image.is-256x256 {
    height: 256px;
    width: 256px;
  }

</style>

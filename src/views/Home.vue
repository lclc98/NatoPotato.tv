<template>
  <div class="section">
    <div class="columns is-mobile">
      <div class="column is-eight-tenths is-offset-one-tenth-desktop is-offset-one-tenth-tablet">
        <nav class="level is-mobile">
          <div class="level-left">
            <p class="level-item ">
              <router-link class="is-hidden-touch" to="/live">
                <span class="icon is-medium has-text-white">
                  <i class="fab fa-2x fa-twitch"></i>
                </span>
              </router-link>
              <a class="is-hidden-desktop" href="twitch://stream/natopotato">
                <span class="icon is-medium has-text-white">
                  <i class="fab fa-2x fa-twitch"></i>
                </span>
              </a>
            </p>
            <p class="level-item">
              <router-link to="/youtube">
                <span class="icon is-medium has-text-white">
                  <i class="fab fa-2x fa-youtube"></i>
                </span>
              </router-link>
            </p>
            <p class="level-item">
              <router-link to="/twitter">
                <span class="icon is-medium has-text-white">
                  <i class="fab fa-2x fa-twitter"></i>
                </span>
              </router-link>
            </p>
            <p class="level-item">
              <router-link to="/instagram">
                <span class="icon is-medium has-text-white">
                  <i class="fab fa-2x fa-instagram"></i>
                </span>
              </router-link>
            </p>
            <p class="level-item">
              <router-link to="/facebook">
                <span class="icon is-medium has-text-white">
                  <i class="fab fa-2x fa-facebook-square"></i>
                </span>
              </router-link>
            </p>
            <p class="level-item">
              <a href="https://discord.gg/2QVCUV6">
                <span class="icon is-medium has-text-white">
                  <i class="fab fa-2x fa-discord"></i>
                </span>
              </a>
            </p>
            <p class="level-item">
              <router-link to="/merch">
                <span class="icon is-medium has-text-white">
                  <i class="fas fa-2x fa-tshirt"></i>
                </span>
              </router-link>
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

        <div class="columns">
          <div class="column is-offset-one-fifth-tablet is-three-fifths-tablet">
            <div class="has-text-centered">
              <h1 class="title">NatoPotato</h1>
            </div>
            <div class="has-text-centered">
              <h2 class="subtitle">
                G'Day Guys, What's Happening? My Name Is NatoPotato!<br><br>
                I am a 25 E-Boy from Perth, Western Australia with a passion for games and
                entertaining, I have a beautiful fiancé and a feather baby named Alfie.
                Streaming started for me when I lost my job and needed something to fill in my days,
                I currently work casually, study, exercise, stream, create content and spend my free
                time (if any) with my fiancé and Alfie.
                I would love to get to know you so come say hi and join the community!
              </h2>
            </div>
          </div>
        </div>
        <div v-if="live" class="card is-hidden-mobile">
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
              <div class="column">
                <div class="aspect-ratio">
                  <iframe class="aspect-ratio" :src="`https://player.twitch.tv/?channel=${channel}&muted=true`"
                          frameborder="0"
                          allowfullscreen="true"
                          scrolling="no">
                  </iframe>
                </div>
              </div>
              <div class="column" style="flex: none; width: 25%; padding-top: 0; padding-bottom: 0">
                <iframe :src="`https://www.twitch.tv/embed/${channel}/chat`" frameborder="0" scrolling="no" width="100%"
                        height="100%" style="height:100%"></iframe>
              </div>
            </div>
          </div>
        </div>
        <br>
        <Schedule :live="live" :channel="channel"></Schedule>
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
import TwitchClient from 'twitch/lib/TwitchClient';

const YoutubeVideos = () => import(/* webpackChunkName: "youtube" */ '../component/YoutubeVideos.vue');
const TwitterFeed = () => import(/* webpackChunkName: "twitter" */ '../component/TwitterFeed.vue');
const InstagramFeed = () => import(/* webpackChunkName: "instagram" */ '../component/InstagramFeed.vue');
const TwitchFeed = () => import(/* webpackChunkName: "twitch" */ '../component/TwitchFeed.vue');
const Schedule = () => import(/* webpackChunkName: "schedule" */ '../component/Schedule.vue');

export default {
  name: 'home',
  components: {
    Schedule,
    TwitchFeed,
    InstagramFeed,
    TwitterFeed,
    YoutubeVideos,
  },
  metaInfo: {
    title: 'Home',
    titleTemplate: titleChunk => (titleChunk ? `${titleChunk} - NatoPotato` : 'NatoPotato'),
    meta: [
      { vmid: 'description', name: 'description', content: 'I am a 25 E-Boy from Perth, Western Australia with a passion for games and entertaining, I have a beautiful fiancé and a feather baby named Alfie.' },
    ],
    htmlAttrs: {
      lang: 'en',
    },
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

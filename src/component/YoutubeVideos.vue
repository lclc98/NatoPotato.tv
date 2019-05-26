<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Youtube Videos
      </p>
      <a @click="showHide" class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fas" :class="show ? 'fa-angle-down' : 'fa-angle-up'" aria-hidden="true"></i>
        </span>
      </a>
    </header>
    <div v-show="show" class="card-content">
      <div class="content">
        <div v-if="youtubePlaylist.length === 0">
          Loading videos...
        </div>
        <div v-bind:key="index" v-for="(item, index) in youtubePlaylist">
          <div class="video-wrapper">
            <iframe class="video"
                     :src="`https://www.youtube.com/embed/${item.contentDetails.videoId}`"
                     frameborder="0"
                     allowfullscreen></iframe>
          </div>
          <br v-if="index < 2">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YoutubeVideos',
  data() {
    let show = this.$cookie.get('youtube');
    show = show === undefined || show === 'true';
    return { youtubePlaylist: [], show };
  },
  mounted() {
    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=UURuM4_srnCdgGN50IlJxNBQ&key=${process.env.VUE_APP_YOUTUBE_KEY}`)
      .then(value => value.json()
        .then((data) => {
          if (data.items) {
            this.youtubePlaylist = data.items;
            this.youtubePlaylist.length = 3;
          }
        }));
  },
  methods: {
    showHide() {
      this.show = !this.show;
      this.$cookie.set('youtube', this.show, { expires: '1M' });
    },
  },
};
</script>

<style scoped>
  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .video-wrapper {
    position: relative;
    padding-bottom: 47%;
    padding-top: 25px;
    height: 0;
  }
</style>

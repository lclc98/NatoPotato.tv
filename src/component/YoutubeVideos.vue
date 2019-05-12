<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Youtube Videos
      </p>
      <a href="#" class="card-header-icon" aria-label="more options">
                  <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
      </a>
    </header>
    <div class="card-content">
      <div class="content">
        <div v-if="youtubePlaylist.length == 0">
          Loading videos...
        </div>
        <div v-bind:key="index" v-for="(item, index) in youtubePlaylist">
          <div v-if="index < 3" class="video-wrapper">
            <iframe  class="video"
                     :src="`http://www.youtube.com/embed/${item.contentDetails.videoId}`"
                     frameborder="0"
                     allowfullscreen></iframe>
          </div>
          <br v-if="index < 2">
        </div>
      </div>
    </div>
  </div>
  <!--  TODO HANDLE COLLAPSING-->

</template>

<script>
export default {
  name: 'YoutubeVideos',
  data() {
    return { youtubePlaylist: [] };
  },
  mounted() {
    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=UURuM4_srnCdgGN50IlJxNBQ&key=${process.env.VUE_APP_YOUTUBE_KEY}`)
      .then(value => value.json()
        .then((data) => {
          if (data.items) this.youtubePlaylist = data.items;
        }));
  },
};
</script>

<style scoped>

</style>

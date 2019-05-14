<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Instagram
      </p>
      <a href="#" class="card-header-icon" aria-label="more options">
                  <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
      </a>
    </header>
    <div class="card-content">
      <div class="content">
        <div v-bind:key="index" v-for="(shortcode, index) in posts">
          <template v-if="index < 3">
            <blockquote class="instagram-media" :data-instgrm-permalink="`https://www.instagram.com/p/${shortcode}/`"
                        data-instgrm-version="12"
                        style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
            </blockquote>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InstagramFeed',

  data() {
    return { posts: [] };
  },
  mounted() {
    fetch('https://www.instagram.com/nato____potato/')
      .then(value => value.text()
        .then((data) => {
          const jsonPattern = new RegExp(/<script type="text\/javascript">window\._sharedData\s?=(.+);<\/script>/);
          const arrMatches = data.match(jsonPattern);

          const postPattern = new RegExp(/"shortcode":\s*"([0-9a-zA-Z]+)",/g);

          this.posts = this.matchAll(arrMatches[1], postPattern);
          this.posts.length = 3;
        }));
  },
  methods: {
    matchAll(str, regex) {
      const res = [];
      let m;
      if (regex.global) {
        // eslint-disable-next-line no-cond-assign
        while (m = regex.exec(str)) {
          res.push(m[1]);
        }
        // eslint-disable-next-line no-cond-assign
      } else if (m = regex.exec(str)) {
        res.push(m[1]);
      }
      return res;
    },
  },
};
</script>

<style scoped>

</style>

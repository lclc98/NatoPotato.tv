<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Instagram
      </p>
      <a @click="showHide" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas" :class="show ? 'fa-angle-down' : 'fa-angle-up'" aria-hidden="true"></i>
          </span>
      </a>
    </header>
    <div v-show="show" class="card-content">
      <div class="content">
        <div v-bind:key="index" v-for="(item, index) in posts">
          <template v-if="index < 3">
            <div style="width: 100%;" v-html="item"></div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'InstagramFeed',

  data() {
    let show = true;
    if (this.$cookies.isKey('instagram')) {
      show = this.$cookies.get('instagram') === 'true';
    }
    return { posts: [], show };
  },
  mounted() {
    fetch('https://www.instagram.com/nato____potato/?__a=1')
      .then(value => value.text()
        .then((data) => {
          const postPattern = new RegExp(/"shortcode":\s*"([0-9a-zA-Z]+)",/g);

          const shortcode = this.matchAll(data, postPattern);
          shortcode.length = 3;
          for (let index = 0; index < shortcode.length; index += 1) {
            fetch(`https://api.instagram.com/oembed/?url=https://instagr.am/p/${shortcode[index]}/&maxwidth=320&omitscript=true`)
              .then(value1 => value1.json()
                .then((value2) => {
                  Vue.set(this.posts, index, value2.html.replace('max-width:320px;', '').replace('min-width:326px;', ''));
                  window.instgrm.Embeds.process();
                }));
          }
        }));
  },
  methods: {
    matchAll(str, regex) {
      const res = [];
      let m;
      // eslint-disable-next-line no-cond-assign
      while (m = regex.exec(str)) {
        res.push(m[1]);
      }
      return res;
    },
    showHide() {
      this.show = !this.show;
      this.$cookies.set('instagram', this.show, '1m');
    },
  },
};
</script>

<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a role="button" @click="onClickNavbar"
           class="navbar-burger burger" :class="navbarOpen?'is-active':''"
           aria-label="menu" aria-expanded="false" data-target="navbarNatoPotato">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarNatoPotato" class="navbar-menu" :class="navbarOpen?'is-active':''">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">
            Home
          </router-link>
          <!--          <router-link class="navbar-item" to="/specs">-->
          <!--            Computer Specs-->
          <!--          </router-link>-->
          <router-link class="navbar-item" to="/sponsors">
            Sponsors
          </router-link>
          <router-link class="navbar-item is-hidden-touch" to="/unitetv">
            UniteTV
          </router-link>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  metaInfo: {
    titleTemplate: titleChunk => (titleChunk ? `${titleChunk} - NatoPotato` : 'NatoPotato'),
    htmlAttrs: {
      lang: 'en',
    },
  },
  data() {
    return { navbarOpen: false };
  },
  methods: {
    onClickNavbar() {
      this.navbarOpen = !this.navbarOpen;
    },
  },
};
</script>

<style scoped>
  .navbar-burger {
    margin-left: unset !important;
  }
</style>

import Vue from 'vue';
import Meta from 'vue-meta';
import Router from 'vue-router';
import VueCookie from 'vue-cookie';
import AspectRatio from 'v-aspect-ratio';
import VueAwesomeCountdoown from 'vue-awesome-countdown';

import Home from './views/Home.vue';
import Specs from './views/Specs.vue';
import Sponsors from './views/Sponsors.vue';
import UniteTV from './views/UniteTV.vue';

import './assets/bulmaswatch.scss';

Vue.use(AspectRatio);
Vue.use(Meta);
Vue.use(Router);
Vue.use(VueCookie);
Vue.use(VueAwesomeCountdoown);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/specs',
      component: Specs,
    },
    {
      path: '/sponsors',
      component: Sponsors,
    },
    {
      path: '/unitetv',
      component: UniteTV,
    },
    {
      path: '/live',
      beforeEnter() { location.href = 'https://www.twitch.tv/natopotato'; },
    },
    {
      path: '/youtube',
      beforeEnter() { location.href = 'https://www.youtube.com/user/NatoPotatoOfficial/'; },
    },
    {
      path: '/twitter',
      beforeEnter() { location.href = 'https://twitter.com/NatooPotatoo'; },
    },
    {
      path: '/instagram',
      beforeEnter() { location.href = 'https://www.instagram.com/nato____potato/'; },
    },
    {
      path: '/facebook',
      beforeEnter() { location.href = 'https://www.facebook.com/natopotatoofficial/'; },
    },
    {
      path: '/merch',
      beforeEnter() { location.href = 'https://shop.spreadshirt.com/natopotato'; },
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

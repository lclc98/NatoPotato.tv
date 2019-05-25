import Vue from 'vue';
import Router from 'vue-router';
import Buefy from 'buefy';

import Home from './views/Home.vue';

import './assets/bulmaswatch.min.css';

const vueAwesomeCountdown = require('vue-awesome-countdown').default;
const VueCookie = require('vue-cookie');

Vue.use(vueAwesomeCountdown);
Vue.use(Router, Buefy);
Vue.use(VueCookie);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
  ],
});

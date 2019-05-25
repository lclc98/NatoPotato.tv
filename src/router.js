import Vue from 'vue';
import Router from 'vue-router';
import VueCookie from 'vue-cookie';
import VueAwesomeCountdoown from 'vue-awesome-countdown';

import Home from './views/Home.vue';

import './assets/bulmaswatch.scss';

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
  ],
});

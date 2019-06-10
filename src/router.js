import Vue from 'vue';
import Meta from 'vue-meta';
import Router from 'vue-router';
import VueCookie from 'vue-cookie';
import VueAnalytics from 'vue-analytics';
import VueAwesomeCountdoown from 'vue-awesome-countdown';

import Home from './views/Home.vue';
// import Specs from './views/Specs.vue';
import UniteTV from './views/UniteTV.vue';
import Sponsors from './views/Sponsors.vue';
import Redirect from './views/Redirect.vue';

import './assets/style.scss';

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    // {
    //   path: '/specs',
    //   component: Specs,
    // },
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
      component: Redirect,
      props: {
        redirectURL: 'https://www.twitch.tv/natopotato',
      },
    },
    {
      path: '/youtube',
      component: Redirect,
      props: {
        redirectURL: 'https://www.youtube.com/user/NatoPotatoOfficial/',
      },
    },
    {
      path: '/twitter',
      component: Redirect,
      props: {
        redirectURL: 'https://twitter.com/NatooPotatoo',
      },
    },
    {
      path: '/instagram',
      component: Redirect,
      props: {
        redirectURL: 'https://www.instagram.com/nato____potato/',
      },
    },
    {
      path: '/facebook',
      component: Redirect,
      props: {
        redirectURL: 'https://www.facebook.com/natopotatoofficial/',
      },
    },
    {
      path: '/merch',
      component: Redirect,
      props: {
        redirectURL: 'https://shop.spreadshirt.com/natopotato',
      },
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

Vue.use(Meta);
Vue.use(Router);
Vue.use(VueCookie);
Vue.use(VueAwesomeCountdoown);

Vue.use(VueAnalytics, {
  id: 'UA-141765684-1',
  debug: {
    sendHitTask: process.env.NODE_ENV === 'production',
    enabled: process.env.NODE_ENV !== 'production',
  },
  router,
});

export default router;

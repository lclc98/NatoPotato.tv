import Vue from 'vue';
import Meta from 'vue-meta';
import Router from 'vue-router';
import VueCookies from 'vue-cookies';
import VueAwesomeCountdoown from 'vue-awesome-countdown';

import './assets/style.scss';

const Home = () => import(/* webpackChunkName: "home" */ './views/Home.vue');
const UniteTV = () => import(/* webpackChunkName: "unitetv" */ './views/UniteTV.vue');
const Sponsors = () => import(/* webpackChunkName: "sponsors" */ './views/Sponsors.vue');
const Redirect = () => import(/* webpackChunkName: "redirect" */ './views/Redirect.vue');


const router = new Router({
  mode: 'hash',
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

Vue.use(VueCookies);
Vue.use(Meta);
Vue.use(Router);
Vue.use(VueAwesomeCountdoown);

export default router;

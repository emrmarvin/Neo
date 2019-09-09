import Vue from 'vue';
import Router from 'vue-router';
// import Auth from '@okta/okta-vue';
import VueGoodTablePlugin from 'vue-good-table';
import Home from './views/Home.vue';
import 'vue-good-table/dist/vue-good-table.css';
// import FlowControls from './views/FlowControls.vue';
// import IsolationValves from './views/IsolationValves.vue';
// import PressureManagement from './views/PressureManagement.vue';
// import ActuationTechs from './views/ActuationTechs.vue';
// import LifecycleServices from './views/LifecycleServices.vue';
// import Country from './views/Country.vue';


Vue.use(Router);
Vue.use(VueGoodTablePlugin);
// Vue.use(Auth, {
//   issuer: 'https://dev-279632.okta.com/oauth2/default',
//   client_id: '0oannn51zQdFqD0pG356',
//   redirect_uri: 'http://localhost:8000/implicit/callback',
//   scope: 'openid profile email'
// });

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: '/flow/',
      name: 'flow',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/FlowControls.vue'),
    },
    {
      path: '/isv/',
      name: 'isolation',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/IsolationValves.vue'),
    },
    {
      path: '/pm/',
      name: 'pressureManagement',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/PressureManagement.vue'),
    },
    {
      path: '/act/',
      name: 'actuationTechs',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/ActuationTechs.vue'),
    },
    {
      path: '/lcs/',
      name: 'lifecycleServices',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/LifecycleServices.vue'),
    },
    {
      path: '/about/',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/country/',
      name: 'country',
      component: () => import(/* webpackChunkName: "about" */ './views/Country.vue'),
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: '/dashboard/',
      name: 'Dashboard',
      component: () => import(/* webpackChunkName: "about" */ './views/Dashboard.vue'),
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: '/settings/',
      name: 'Settings',
      component: () => import(/* webpackChunkName: "about" */ './views/Settings.vue'),
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: '/help/',
      name: 'Help',
      component: () => import(/* webpackChunkName: "about" */ './views/Help.vue'),
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: '/feedback/',
      name: 'Feedback',
      component: () => import(/* webpackChunkName: "about" */ './views/Feedback.vue'),
      // meta: {
      //   requiresAuth: true
      // }
    },
    // {
    //   path: '/implicit/callback', component: Auth.handleCallback()
    // }
  ],
});

export default router;

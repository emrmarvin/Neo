import Vue from 'vue';
import Router from 'vue-router';
// import Auth from '@okta/okta-vue';
import Home from './views/Home.vue';


Vue.use(Router);
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
      path: '/about/',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    // {
    //   path: '/implicit/callback', component: Auth.handleCallback()
    // }    
  ],
});

// const onAuthRequired = async (from, to, next) => {
//   if (from.matched.some(record => record.meta.requiresAuth) && !(await Vue.prototype.$auth.isAuthenticated())) {
//     // Navigate to custom login page
//     next({ path: '/login' })
//   } else {
//     next()
//   }
// };

// router.beforeEach(onAuthRequired);

export default router;
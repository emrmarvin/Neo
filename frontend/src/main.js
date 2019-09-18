import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
// import store from './store';
import apolloProvider from './vue-apollo';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(Vuetify, {
  iconfont: 'md',
});

new Vue({
  router,
  apolloProvider,
  render: h => h(App),
}).$mount('#app');

export const bus = new Vue()
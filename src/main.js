import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Vuelidate from 'vuelidate';

import App from './App.vue';
import router from './router';
import store from './store';
// scss bootstrapVue
import './assets/scss/index.scss';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Vuelidate);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

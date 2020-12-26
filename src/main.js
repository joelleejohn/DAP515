import Vue from 'vue';
import App from './App.vue';
import Home from './components/Home.vue';
import ContactUs from './components/ContactUs.vue';
import CoronavirusUpdate from './components/CoronavirusUpdate.vue';
import FuneralFlowers from './components/FuneralFlowers.vue';
import Product from './components/Product.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.config.productionTip = false;
/* eslint-disable no-unused-vars */
const router = new VueRouter({
  base: '/DAP515/dist/',
  routes: [
    { path: "", components: {default: Home, sidebar: CoronavirusUpdate } },
    { path: "/funeralflowers", component: FuneralFlowers },
    { path: "/contactus", component: ContactUs },
    { path: "/product", component: Product}

  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});
/* eslint-enable no-unused-vars */

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue';
import App from './App.vue';
import Home from './components/Home.vue';
import ContactUs from './components/ContactUs.vue';
import CoronavirusUpdate from './components/CoronavirusUpdate.vue';
import FuneralFlowers from './components/FuneralFlowers.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: "", components: {default: Home, sidebar: CoronavirusUpdate } },
    { path: "/funeralflowers", component: FuneralFlowers },
    { path: "/contactus", component: ContactUs },

  ],
  mode: 'history'
});


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify';

Vue.use(Vuetify);

import VueIziToast from 'vue-izitoast';
import 'izitoast/dist/css/iziToast.css'

Vue.use(VueIziToast)

require('bootstrap/dist/css/bootstrap.css')
require('bootstrap-vue/dist/bootstrap-vue.css')
require('devicons/css/devicons.css')
require('font-awesome/css/font-awesome.css')

import VueSidebarMenu from 'vue-sidebar-menu';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';

Vue.use(VueSidebarMenu);

import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);

import VModal from 'vue-js-modal';
Vue.use(VModal);

//require('@/assets/style.css');

Vue.config.productionTip = false

import { router } from '@/router.js'
import { store } from '@/_store/store.js'

new Vue({
  store,
  Vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/main.scss'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouterMultiView from 'vue-router-multi-view'
import BootstrapVue from 'bootstrap-vue'
import '../node_modules/font-awesome/css/font-awesome.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faUser, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
var VueScrollTo = require('vue-scrollto');
library.add(faComment, faUser, faPhone, faEnvelope)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(VueRouterMultiView)
Vue.use(BootstrapVue)
Vue.use(VueScrollTo)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

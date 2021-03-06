import 'vuetify/dist/vuetify.min.css'
import 'intro.js/minified/introjs.min.css'
import 'intro.js/themes/introjs-modern.css'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import filter from './filter'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.use(filter)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

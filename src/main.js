// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueRouter from 'vue-router'
import router from './router'
import App from './app.vue'
import http from './router/http'
import ports from './router/ports'
import { Notice } from 'iview'
// import Home from './components/home'
// import VueJsonp from 'vue-jsonp'
// Vue.use(VueJsonp)
// import  { AlertPlugin } from 'vux'
// Vue.use(AlertPlugin)
Vue.config.productionTip = true
Vue.prototype.http = http
Vue.prototype.ports = ports
// Vue.prototype.$Message.config({
//   top: 100,
//   duration: 3
// })
Vue.prototype.$Notice = Notice
// Vue.prototype.$Notice.config({
//   top: 50,
//   duration: 3
// })
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import SkeletonCards from 'vue-ultimate-skeleton-cards'
import { ObserveVisibility } from 'vue-observe-visibility'

Vue.directive('observe-visibility', ObserveVisibility)
Vue.use(SkeletonCards)
Vue.config.productionTip = false

// for global styling, 
// taken from https://stackoverflow.com/questions/39438094/best-way-to-have-global-css-in-vuejs
import './assets/css/style.css'

import vuetify from './plugins/vuetify';



new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')

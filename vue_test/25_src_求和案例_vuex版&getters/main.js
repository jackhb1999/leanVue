import Vue from 'vue'
import App from './App.vue'

// 引入插件
import vueResource from 'vue-resource'

// 引入store 
import store from './store/index.js'

Vue.config.productionTip = false

// 使用插件
Vue.use(vueResource)



new Vue({
  render: h => h(App),
  store,
  beforeCreate() {
  	Vue.prototype.$bus = this
  }
}).$mount('#app')

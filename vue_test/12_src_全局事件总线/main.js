import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

// const demo = Vue.extend({})
// const d = new demo()

// Vue.prototype.x = d
// console.log(Vue.prototype)  // Vue原型对象

new Vue({
  render: h => h(App),
  beforeCreate() {
  	Vue.prototype.$bus = this // 安装全局事件总线
  }
}).$mount('#app')

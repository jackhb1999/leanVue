// 该文件用于创建Vuex中最核心的 storage

import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'

Vue.use(Vuex)

import countOptions from './Count.js'
import personOptions from './Person'

// 创建并暴露store 
export default new Vuex.Store({
	modules:{
		countAbout:countOptions,
		personAbout:personOptions
	}
})

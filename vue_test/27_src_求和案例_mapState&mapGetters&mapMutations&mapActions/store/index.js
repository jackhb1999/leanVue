// 该文件用于创建Vuex中最核心的 storage

import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'

Vue.use(Vuex)

// 准备actions 用于响应组件中的动作
const actions = {
	// jia(context, value) {
	// 	console.log('action被调用了')
	// 	context.commit('JIA', value)
	// },
	// jian(context, value) {
	// 	console.log('action被调用了')
	// 	context.commit('JIAN', value)
	// },
	jiaOdd(context, value) {
		if (context.state.sum % 2) {
			context.commit('JIA', value)
		}
	},
	jiaWait(context, value) {
		setTimeout(() => {
			context.commit('JIA', value)
		}, 500)
	}
}

// 准备 mutations 用于操作数据(state)
const mutations = {
	JIA(state, value) {
		state.sum += value
	},
	JIAN(state, value) {
		state.sum -= value
	}
}

// 准备 state 用于存储数据
const state = {
	sum: 0, // 当前和
	name: 'jack',
	subject: 'Vue'
}

// getters 用于将 state 中的数据进行加工
const getters = {
	bigSum(state){
		return state.sum * 10
	}
}


// // 创建store
// const store = new Vuex.Store({
// 	action,
// 	mutations,
// 	state,
// })

// // 暴露store
// export default store

// 创建并暴露store 
export default new Vuex.Store({
	actions,
	mutations,
	state,
	getters,
})

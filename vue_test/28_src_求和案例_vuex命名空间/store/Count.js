// 求和相关配置
const countOptions = {
	namespaced:true,
	actions:{
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
	},
	mutations:{
		JIA(state, value) {
			state.sum += value
		},
		JIAN(state, value) {
			state.sum -= value
		},
	},
	state:{
		sum: 0, // 当前和
		name: 'jack',
		subject: 'Vue',
	},
	getters:{
		bigSum(state){
			return state.sum * 10
		}
	},
}

export default countOptions
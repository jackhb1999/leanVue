<template>
	<div class="category">
		<h2>当前求和为：{{sum}}</h2>
		<h2>当前求和放大10倍为：{{bigSum}}</h2>
		<h3>I an {{name}},leaning {{subject}}</h3>
		<!-- <select v-model.number="n"> -->
		<select v-model="n">
			<option :value="1">1</option>>
			<option :value="2">2</option>>
			<option :value="3">3</option>>
		</select>
		<button @click="increment(n)">+</button>
		<button @click="decrement(n)">-</button>
		<button @click="incrementOdd(n)">当前求和为奇数再加</button>
		<button @click="incrementWait(n)">等一等再加</button>
	</div>
</template>

<script>
	import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
	export default{
		name:'Count',
		data(){
			return{
				n:1, // 用户选择的数字
				
			}
		},
		computed:{
			// sum(){
			// 	return this.$store.state.sum
			// },
			// name(){
			// 	return this.$store.state.name
			// },
			// subject(){
			// 	return this.$store.state.subject
			// },
			
			// 借助 mapState 生成计算属性，从 state 中读取数据。（对象写法）
			// ...mapState({sum:'sum',name:'name',subject:'subject'}),
			
			// (数组写法)
			...mapState(['sum','name','subject']),
			
			
			// bigSum(){
			// 	return this.$store.getters.bigSum
			// },
			
			...mapGetters(['bigSum']),
		},
		mounted() {
			console.log('count',this);
			const x = mapState({sum:'sum',name:'name',subject:'subject'})
			console.log('x',x);
		},
		methods:{
			// increment(){
			// this.$store.commit('JIA',this.n)
			// },
			// decrement(){
			// this.$store.commit('JIAN',this.n)
			// },
			
			...mapMutations({increment:'JIA',decrement:'JIAN'}),
			
			// incrementOdd(){
			// 	this.$store.dispatch('jiaOdd',this.n)
			// },
			// incrementWait(){
			// 	this.$store.dispatch('jiaWait',this.n)
			// }
			
			...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
		}
	}
</script>

<style>
	button{
		margin-left: 5px;
	}
</style>
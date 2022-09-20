<template>
	<div class="category">
		<h2>当前求和为：{{sum}}</h2>
		<h2>当前求和放大10倍为：{{bigSum}}</h2>
		<h3>I an {{name}},leaning {{subject}}</h3>
		<!-- <h3 style="color: red;">下方组件的总人数:{{personList.length}}</h3> -->
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
			
			...mapState('countAbout',['sum','name','subject']),
			
			
			...mapGetters('countAbout',['bigSum']),
		},
		mounted() {
			console.log('count',this);
			const x = mapState({sum:'sum',name:'name',subject:'subject'})
			console.log('x',x);
		},
		methods:{
			
			...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),
			
			...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
		}
	}
</script>

<style>
	button{
		margin-left: 5px;
	}
</style>
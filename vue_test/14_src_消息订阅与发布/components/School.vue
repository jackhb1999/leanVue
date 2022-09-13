<template>
	<!-- 组件的结构 -->
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
	import pubsub from 'pubsub-js'
	export default {
		// eslint-disable-next-line vue/multi-word-component-names
		name: 'School',
		data() {
			return {
				name: '二高',
				address: '西安'
			}
		},
		mounted() {
			// console.log('School', this.x);
			// this.$bus.$on('hello',(data)=>{
			// 	console.log('我是School组件，收到了数据',data);
			// })
			this.pubId = pubsub.subscribe('hello',function(msgName,data){
				console.log('发布HELLO了',msgName,data);
			})
		},
		beforeDestroy() {
			// 解绑
			// this.$bus.$off('hello')
			pubsub.unsuscribe(this.pubId)
		}

	}
</script>

<style>
	/* 组件的样式 */
	.school {
		background-color: orange;
		padding: 5px;
	}
</style>

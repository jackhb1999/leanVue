<template>
	<div>
		<img src="./assets/logo.png" alt="logo" />
		<h1 v-text="msg" ref="title"></h1>
		<button ref="btn" @click="showDOM">点我输出h1DOM</button>
		<School ref="sch" />
	</div>
</template>

<script>
	// 引入组件
	import School from './components/School.vue';

	export default {
		name: 'App',
		components: {
			School
		},
		data() {
			return {
				msg: "哦塔伊马斯"
			}
		},

		methods: {
			showDOM() {
				console.log( this.$refs)
			}
		}
	}
</script>

<style>

</style>

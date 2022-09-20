<template>
	<div>
		<Count></Count>
	</div>
</template>

<script>
	import Count from './components/Count.vue'
	export default {
		name: 'App',
		components: {
			Count
		},
		// mounted() {
		// 	console.log('app',this);
		// }

	}
</script>

<style>
	.container {
		display: flex;
		justify-content: space-around;
	}
</style>

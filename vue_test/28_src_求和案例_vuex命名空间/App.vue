<template>
	<div>
		<Count></Count>
		<hr>
		<Person></Person>
	</div>
</template>

<script>
	import Count from './components/Count.vue'
	import Person from './components/Person'
	export default {
		name: 'App',
		components: {
			Count,Person
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

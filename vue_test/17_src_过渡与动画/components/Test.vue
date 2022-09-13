<template>
	<div>
		<button @click="isShow = !isShow">显示/隐藏</button>
		<transition name="hello" appear>
			<h1 v-show="isShow">偶哈有！</h1>
		</transition>
		
	</div>
</template>

<script>
	export default{
		name:'Test',
		data(){
			return{
				isShow:true
			}
		}
	}
</script>

<style scoped>
	h1{
		background-color: orange;
	}
	
	.hello-enter-active{
		animation: ann 1s;
	}
	
	.hello-leave-active{
		animation: ann 1s reverse;
	}
	
	@keyframes ann {
		from{
			transform: translateX(-100%);
		}
		to{
			transform: translateX(0px);
		}
	}
</style>
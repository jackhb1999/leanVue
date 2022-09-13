<template>
	<ul class="todo-main">
		<transition-group name="todo" appear>
			<TodoItem
			v-for="todoObj in todos" 
			:key="todoObj.id" 
			:todo="todoObj" ></TodoItem>
		</transition-group>
	
	</ul>
</template>

<script>
	import TodoItem from "./TodoItem.vue"
	export default{
		name:'TodoList',
		components:{
			TodoItem
		},
		props:["todos"]
	}
</script>

<style scoped>
	
/*List*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}



.todo-leave-active{
	animation: ann 0.6s reverse;
}

@keyframes ann {
	from{
		transform: translateX(100%);
	}
	to{
		transform: translateX(0px);
	}
}
</style>
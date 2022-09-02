<template>
    <!-- 组件的结构 -->
    <div id="test" class="demo">
        <h2 >学生姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
		<input type="text" v-fbind:value="sex"/>
    </div>
</template>

<script>

    // 组件交互相关的代码（数据、方法等）
    export default {
            // eslint-disable-next-line vue/multi-word-component-names
            name:'Student',
            data() {
                return {
					name:'张三',
					sex:'男'
                }
            },

    }
        
</script>

<style scoped>
	.demo{
		background-color: skyblue;
	}
</style>
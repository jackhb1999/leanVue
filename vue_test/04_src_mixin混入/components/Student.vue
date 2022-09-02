<template>
    <!-- 组件的结构 -->
    <div>
        <h2 @click="showName">学生姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
    </div>
</template>

<script>
	import {mixin} from '../mixin.js'
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
			mixins:[mixin]
    }
        
</script>


<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2 @click="showName">学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
	import {mixin,hunhe} from '../mixin.js'

    export default {
            // eslint-disable-next-line vue/multi-word-component-names
            name:'School',
            data() {
                return {
                    name: '二高',
                    address: '西安'
                }
            },
			mixins:[mixin,hunhe]
    }
        
</script>

<style>
     /* 组件的样式 */
     .demo{
        background-color: orange;
     }
</style>
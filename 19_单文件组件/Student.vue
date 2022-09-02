<template>
    <!-- 组件的结构 -->
    <div>
        <h2>学生名称：{{name}}</h2>
        <h2>学校地址：{{age}}</h2>
    </div>
</template>

<script>
    // 组件交互相关的代码（数据、方法等）
    export default {
            name:'School',
            data() {
                return {
                    name: '张三',
                    age: 16
                }
            }
    }
        
</script>


<template>
    <ul>
        <li>消息编号：{{$route.params.id}}</li>
        <li>消息标题：{{$route.params.title}}</li>
        <li>a:{{a}}</li>
        <li>b:{{b}}</li>
    </ul>
  
</template>

<script>
export default {
    name: 'Detail',
    props:['a','b'],
    mounted() {
        console.log('Home组件挂载完毕了',this.$route)
}
}
</script>

<style>

</style>
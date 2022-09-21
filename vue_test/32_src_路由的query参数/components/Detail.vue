<template>
    <ul>
        <li>消息编号：{{$route.query.id}}</li>
        <li>消息标题：{{$route.query.title}}</li>
    </ul>
  
</template>

<script>
export default {
    name: 'Detail',
    mounted() {
        console.log('Home组件挂载完毕了',this)
}
}
</script>

<style>

</style>
<template>
	<div>
		<button>原生按钮</button>
		<input type="text"/>

		<el-row>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</el-row>
<div class="block">
    <span class="demonstration">带快捷选项</span>
    <el-date-picker
      v-model="value2"
      type="datetime"
      placeholder="选择日期时间"
      align="right"
      :picker-options="pickerOptions">
    </el-date-picker>
  </div>
	</div>
</template>

<script>
	import Banner from './components/Banner.vue'
	export default {
		name: 'App',
		components: {
			Banner
		},


	}
</script>

<style>
	.container {
		display: flex;
		justify-content: space-around;
	}
</style>

<template>
	<view class="gradient">
		<gradient-color 
			v-for="(month, index) in monthList" 
			:key="month.month"
			:colors="month.colors"
			:active="index <= currentIndex"
		/>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	import GradientColor from './GradientColor'
	
	export default {
		name:"Gradient",
		components: {
			GradientColor
		},
		computed: {
			...mapState(['monthList', 'currentIndex'])
		}
	}
</script>

<style lang="scss">
	.gradient {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
	}
</style>

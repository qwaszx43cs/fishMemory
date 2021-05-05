<template>
	<view 
		class="gradient_color"
		:class="{ gradient_color__active: active }"
		:style="{ backgroundImage: gradientColor }"
	/>
</template>

<script>
	export default {
		name:"GradientColor",
		props: {
			active: {
				type: Boolean
			},
			colors: {
				type: Array
			}
		},
		computed: {
			gradientColor() {
				// 渐变底部颜色
				const colorBottom = `color-stop(30%, ${this.colors[0]})`
				// 渐变顶部颜色
				const colorTop = `to(${this.colors[1]})`
				return `-webkit-gradient(linear, left bottom, left top, ${colorBottom}, ${colorTop})`
			}
		}
	}
</script>

<style lang="scss">
	.gradient_color {
		position: absolute;
		height: 100%;
		width: 100%;
		opacity: 0;
		transition:  opacity 0.5 ease;
	}
	
	.gradient_color__active {
		opacity: 1;
	}
</style>

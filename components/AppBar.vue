<template>
	<view class="app-bar">
		<text class="app-bar_l" @tap="$emit('left')">
			<i :class="['fa', `fa-${left}`]"></i>
		</text>
		<h3>{{ title }}</h3>
		<text class="app-bar_r" @tap="$emit('right')">
			<i :class="['fa', `fa-${right}`]"></i>
		</text>
	</view>
</template>

<script>
	export default {
		name: "AppBar",
		props: {
			title: {
				type: String,
				default: ''
			},
			left: {
				type: String,
				default: 'chevron-left'
			},
			right: {
				type: String,
				default: 'ellipsis-v'
			}
		}
	}
</script>

<style lang="scss">
	.app-bar {
		height: 88rpx;
		display: flex;
		align-items: center;
		z-index: 1;

		h3 {
			display: flex;
			justify-content: center;
			flex: 1;
		}

		text {
			padding: 0 5%;
		}
	}
</style>

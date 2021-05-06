<template>
	<view class="app-bar">
		<text class="app-bar_l" @tap="$emit('left')">
			<i :class="['fa', `fa-${left}`]"></i>
		</text>
		<view class="app-bar_title">{{ title }}</view>
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
		
		.app-bar_title {
			display: flex;
			justify-content: center;
			flex: 1;
		}

		.app-bar_l, .app-bar_r {
			padding: 0 5%;
		}
	}
</style>

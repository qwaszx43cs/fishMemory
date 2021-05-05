<template>
	<view class="avatar" :class="{ avatar_selected: !!selected }">
		<view class="avatar_face">
			<image src="@/static/image/touxiang1.jpg" mode="widthFix"></image>
		</view>
		<view class="avatar_name">Hello,小予</view>
		<view class="avatar_desc">
			{{ currentMonthCard.desc }}
		</view>
	</view>
</template>

<script>
	import { mapState, mapGetters } from 'vuex'
	import MonthPicker from './MonthPicker'

	export default {
		name: "Avatar",
		components: {
			MonthPicker
		},
		computed: {
			...mapState(['selected',]),
			...mapGetters(['currentMonthCard'])
		},
	}
</script>

<style lang="scss">
	.avatar {
		padding: 0 10%;
		height: 30vh;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		transition: all 0.5s ease;
	}

	.avatar_selected {
		transform: translate3d(0, 40rpx, 0);
		opacity: 0;
	}

	.avatar_face {
		height: 120rpx;
		width: 120rpx;
		border-radius: 100%;
		overflow: hidden;
		box-shadow: 0 10rpx 20rpx rgba(0, 0, 0, 0.2);

		image {
			display: block;
			width: 100%;
			height: 100%;
		}
	}
	
	.avatar_name {
		margin-top: 80rpx;
		padding: 0 3%;
		font-size: 50rpx;
		letter-spacing: 2rpx;
		font-weight: 500;
	}
	
	.avatar_desc {
		width: 350rpx;
		margin-top: 30rpx;
		padding: 0 3%;
		font-size: 26rpx;
		font-weight: 200;
		opacity: 0.8;
		line-height: 1.6em;
	}
	
	.month-picker {
		margin-top: 80rpx;
		margin-bottom: 20rpx;
		padding: 0 3%;
		font-size: 32rpx;
	}
</style>

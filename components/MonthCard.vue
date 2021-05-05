<template>
	<view class="month-card" :class="{ 'month-card__selected': !!selected }" @tap="handleClick">
		<view class="month-card_head" >
			<view class="month-card_month" :style="{ color }">
				<view>{{ monthItem.month }}</view>
			</view>
			<view class="month-card_menu">
				<i class="fa fa-ellipsis-v"></i>
			</view>
		</view>
		<view class="month-card_body">
			<view class="month-card_progress">
				<text class="month-card_progress_line">
          <i :style="{ width: progress, backgroundImage: progressColor }"></i>
				</text>
				<text class="month-card_number" :style="{color: monthItem.colors[0], 'font-size': '0.8rem'}">
					{{ progress }}
				</text>
			</view>
		</view>
	</view>
</template>

<script>	
	export default {
		name: "MonthCard",
		props: {
			monthItem: {
				type: Object,
				required: true
			},
			selected: {
				type: Boolean
			}
		},
		computed: {
			color() {
				return this.monthItem.colors[0]
			},
			progress () {
				const totalCount = this.monthItem.monthDays
				const doneCount = this.monthItem.dailys.filter(d => !d.deleted).length
				return `${Math.round((doneCount / totalCount) * 100)}%`
			},
			progressColor () {
				const colorLeft = `color-stop(30%, ${this.monthItem.colors[0]})`
				const colorRight = `to(${this.monthItem.colors[1]})`
				return `-webkit-gradient(linear, left bottom, right bottom, ${colorLeft}, ${colorRight})`
			},
		},
		methods: {
			handleClick () {
				const appRect = document.querySelector('body').getBoundingClientRect()
				const elRect = this.$el.getBoundingClientRect()
				const monthItem = this.monthItem
				const rect = {}
				rect.top = elRect.top - appRect.top
				rect.left = elRect.left - appRect.left
				rect.width = elRect.width
				rect.height = elRect.height
				rect.appWidth = appRect.width
				rect.appHeight = appRect.height
				this.$emit('select', { rect, monthItem })
			}
		}
	}
</script>

<style lang="scss">
	@import url('https://fonts.font.im/css?family=Nunito');
	
	.month-card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex: 1;
		margin: 0 5%;
		overflow: hidden;
		background-color: white;
		border-radius: 20rpx;
		box-shadow: 0 20rpx 20rpx rgba(0, 0, 0, 0.1);
	}
	
	.month-card__selected {
		visibility: hidden;
	}
	
	.month-card_head {
		display: flex;
		padding: 6% 8%;
		justify-content: space-between;
		align-items: center;
		transform: translate3d(0, 0, 0);
		will-change: transform;
		
		.month-card_month {
			font-size: 1.8rem;
			font-family: 'Nunito', sans-serif;
		}
	}

	.month-card_menu {
		color: gray;
	}
	.month-card_body {
		padding: 0 8%;
		will-change: transform;
	}
	
	.month-card_progress {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 25rpx;
	}
	
	.month-card_progress_line {
		flex: 1;
		height: 10rpx;
		background-color: #e7e7e7;
		
		i {
			display: block;
			height: 100%;
			transition: all 0.5s ease;
		}
	}
</style>

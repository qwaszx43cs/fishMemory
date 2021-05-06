<template>
	<transition name="show" @enter="handleEnter" @leave="handleLeave">
		<view class="daily-list" v-if="selected">
			<app-bar :title="currentMonthCard.month" @left="unselectMonthCard" />
			<view class="daily-list_body" v-if="currentMonthCard.dailys.length">
				<view class="daily-list_box" :style="{ boxShadow: color }" v-for="(daily, index) in currentMonthCard.dailys"
						:key="daily.id">
						<view class="left">
							{{ daily.dailyDate | fmt }}
						</view>
						<view class="right">
							{{ daily.title }}
						</view>
					</view>
				</view>
				<view class="daily-list_body" v-else>
					<view class="daily-list_none">
						NO DAILYS YET
					</view>
				</view>
			</view>
		</view>
	</transition>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapGetters
	} from 'vuex'
	import AppBar from './AppBar'
	import MonthCard from './MonthCard'

	export default {
		name: "DailyList",
		components: {
			AppBar,
			MonthCard
		},
		computed: {
			...mapState(['selected', 'unselect']),
			...mapGetters(['currentMonthCard']),
			color() {
				return `8rpx 5rpx 5rpx ${this.currentMonthCard.colors[0]}`
			}
		},
		methods: {
			...mapMutations(['unselectMonthCard']),
			handleEnter(el) {
				Object.assign(el.style, {
					top: `${this.selected.rect.top}px`,
					left: `${this.selected.rect.left}px`,
					width: `${this.selected.rect.width}px`,
					height: `${this.selected.rect.height}px`
				})
				setTimeout(() => {
					Object.assign(el.style, {
						top: 0,
						left: 0,
						width: `${this.selected.rect.appWidth}px`,
						height: `${this.selected.rect.appHeight}px`
					})
				}, 0)
			},
			handleLeave(el) {
				Object.assign(el.style, {
					top: 0,
					left: 0,
					width: `${this.unselect.rect.appWidth}px`,
					height: `${this.unselect.rect.appHeight}px`
				})
				setTimeout(() => {
					Object.assign(el.style, {
						top: `${this.unselect.rect.top}px`,
						left: `${this.unselect.rect.left}px`,
						width: `${this.unselect.rect.width}px`,
						height: `${this.unselect.rect.height}px`
					})
				}, 0)
			}
		}
	}
</script>

<style lang="scss">
	.daily-list {
		position: fixed;
		display: flex;
		flex-direction: column;
		background-color: white;
		border-radius: 0;
		color: #666;
		will-change: top, left, width, height;

		.app-bar {
			opacity: 1;
			transform: translate3d(0, 0, 0);
			background-color: white;
		}
	}

	.daily-list_body {
		height: 100%;
		background-color: #E4E7ED;
		font-family: 'Nunito', sans-serif;

	}

	.daily-list_box {
		height: 200rpx;
		background-color: white;
		margin: 40rpx 5% 0;
		border-radius: 20rpx;
		display: flex;
		align-items: center;
		border: 2rpx solid gray;
		box-shadow: 8rpx 5rpx 5rpx #56ab2f;


		.left {
			height: 100%;
			flex: 0 0 25%;
			line-height: 200rpx;
			text-align: center;
			border-right: 2rpx solid lightgray;
			font-size: 1.1rem;
		}

		.right {
			padding: 10rpx;
			margin-left: 20rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2; // 控制多行的行数
			-webkit-box-orient: vertical;
		}
	}

	.daily-list_none {
		// height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 5%;
		font-size: 1.3rem;
	}


	.show-enter-to,
	.show-leave {
		border-radius: 0;

		.month-card {
			padding: 0 40rpx;
		}

		.month-card_head,
		.month-card_body {
			transform: translate3d(0, 88px, 0);
		}

		.month-card_menu {
			opacity: 0;
		}

		.app-bar {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}

	}

	.show-leave-to,
	.show-enter {
		border-radius: 8px;

		.month-card {
			padding: 0;
		}

		.month-card_head {
			transform: translate3d(0, 0, 0);
		}

		.month-card_body {
			transform: translate3d(0, 189px, 0);
		}

		.month-card_menu {
			opacity: 1;
		}

		.app-bar {
			opacity: 0;
			transform: translate3d(0, -100%, 0);
		}

		.daily-list_body {
			opacity: 0;
		}
	}

	.show-enter-active,
	.show-leave-active {
		transition: all 0.5s ease;

		.month-card,
		.month-card_head,
		.month-card_body,
		.month-card_menu,
		.app-bar {
			transition: all 0.5s ease;
		}
	}
</style>

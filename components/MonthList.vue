<template>
	<view class="month-list" :class="{ 'month-list_selected': !!selected }">
			<view class="_ul" :style="{ width: `${ monthList.length * 100}%` }">
				<view class="_li" 
					v-for="monthItem in monthList"
					:key="monthItem.month"
					:style="{ transform: `translate3d(-${ currentIndex * 100 }%, 0, 0)`}"
				>
					<month-card 
						:monthItem="monthItem"
						:selected="selected && monthItem === selected.monthItem"
						@select="selectMonthCard"
					/>
				</view>
			</view>
		</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex'
	import MonthCard from './MonthCard'
	
	export default {
		name:"MonthList",
		components: {
			MonthCard,
		},
		computed: {
			...mapState(['selected', 'monthList', 'currentIndex'])
		},
		methods: {
			...mapMutations(['nextMonthCard', 'prevMonthCard', 'selectMonthCard'])
		},
		mounted () {
			let touch = {}
				// HTML5触摸事件touchstart, touchmove, touchend
				this.$el.addEventListener('touchstart', evt => {
				// clientX是触摸目标在视口中X坐标
				// 触摸事件对象包含了touches, 当前位于屏幕手指的列表
				touch.startX = evt.touches[0].clientX
				touch.endX = 0
			})
			this.$el.addEventListener('touchmove', evt => {
				touch.endX = evt.touches[0].clientX
			})
			this.$el.addEventListener('touchend', () => {
				if (!touch.endX || Math.abs(touch.endX - touch.startX) < 10) {
					return
				}
				if (touch.endX < touch.startX) {
					this.nextMonthCard()
				} else {
					this.prevMonthCard()
				}
				// 滑动结束时，抛出值，抛出事件名为change
				this.$emit('change', this.currentIndex)
			})
		}
	}
</script>

<style lang="scss">
	month-picker {
		padding: 0 10%;
	}
	
	.month-list {
		margin-top: 4%;
		height: 50vh;
		padding: 0 10%;
		transition: all 0.5s ease;
		
		._ul {
			padding-left: 0;
		}
		
		> ._ul, 
		> ._ul > ._li {
			display: flex;
			height: 100%;
		}
		
		> ._ul > ._li {
			flex: 1;
			transition: transform 0.5s ease;
		}
	}
	
	.month-list_selected {
		transform: scaleX(1.25);
	}
</style>

<template>
	<view class="month-picker" :class="{ 'month-picker__selected': !!selected }">
		<picker 
			mode="date" 
			:value="currentIndexTime" 
			start="2021-01-01" 
			end="2021-12-31" 
			fields="month"
			@change="bindDateChange"
		>
			<view class="uni-input">
				{{ `Today : ${ currentIndexTime }` }}
				<i class="fa fa-chevron-down"></i>
			</view>
		</picker>
	</view>
</template>

<script>
	import { mapState, mapGetters, mapMutations } from 'vuex'
	
	// uniapp picker组件
	function getDate(type) {
		const date = new Date()
	
		let year = date.getFullYear()
		let month = date.getMonth() + 1
		let day = date.getDate()
	
		if (type === 'start') {
			year = year - 10
		} else if (type === 'end') {
			year = year + 10
		}
		month = month > 9 ? month : '0' + month
		day = day > 9 ? day : '0' + day
	
		return `${year}-${month}`
	}
	
	export default {
		name:"MonthPicker",
		data() {
			return {
				date: getDate({
						format: true
					}),
				// picker有效日期范围的开始
				startDate: getDate('start'),
				// picker有效日期范围的结束
				endDate: getDate('end'),
			}
		},
		computed: {
			...mapState(['selected']),
			...mapGetters(['currentIndexTime'])
		},
		methods: {
			...mapMutations(['changeCurrentIndex']),
			// 日期选择器改变时，更改currentIndex的值
			bindDateChange: function(e) {
				this.date = e.detail.value
				let selectedMonth = Number(e.detail.value.slice(-2)) - 1
				this.changeCurrentIndex(selectedMonth)
			}
		}
	}
</script>

<style lang="scss">
	.month-picker {
		padding: 0 12%;
		margin-top: 4%;
		margin-bottom: 8%;
		height: 40rpx;
		line-height: 40rpx;

		.uni-input {
			font-size: 30rpx
		}
		
		.fa-chevron-down {
			margin-left: 10rpx;
			font-size: 36rpx;
		}
	}
	
	.month-picker__selected {
		transform: translate3d(0, 40rpx, 0);
		opacity: 0;
	}
</style>

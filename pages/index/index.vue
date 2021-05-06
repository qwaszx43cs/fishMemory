<template>
	<view class="index">
		<app-bar title="FishMemory" left="bars" right="search" />
		<avatar />
		<gradient />
		<month-picker />
		<month-list/>
		<daily-list />
		<floating-button />
		<submit-daily />
	</view>
</template>

<script>
	import AppBar from '@/components/AppBar'
	import Avatar from '@/components/Avatar'
	import Gradient from '@/components/Gradient'
	import MonthList from '@/components/MonthList'
	import MonthPicker from '@/components/MonthPicker'
	import DailyList from '@/components/DailyList'
	import FloatingButton from '@/components/FloatingButton'
	import SubmitDaily from '@/components/SubmitDaily'

	export default {
		components: {
			AppBar,
			Avatar,
			Gradient,
			MonthList,
			MonthPicker,
			DailyList,
			FloatingButton,
			SubmitDaily
		},
	}
</script>

<style lang="scss">
	.index {
		height: 100%;
		width: 100%;
		overflow: hidden;
		color: white;
	}
</style>

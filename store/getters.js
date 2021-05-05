const getters = {
	// 返回当前currentIndex对应的日期
	currentIndexTime(state) {
		let y = '2021'
		let index = state.currentIndex + 1
		let m = index > 9 ? index : '0' + index
		return y.concat('-', m)
	},
	
	// 返回当前monthCard所对应的数据
	currentMonthCard(state) {
		return state.monthList[state.currentIndex]
	}
}

export default getters
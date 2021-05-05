const mutations = {
	
	// 点击月份卡片
	selectMonthCard(state, selected) {
		state.unselect = null
		state.selected = selected
	},
	// 退出月份卡片
	unselectMonthCard(state) {
		state.unselect = state.selected
		state.selected = null
	},
	
	// 向后切换选项卡
	nextMonthCard(state) {
		if (state.currentIndex < state.monthList.length - 1) {
			state.currentIndex++
		}
	},
	
	// 向前切换选项卡
	prevMonthCard(state) {
		if (state.currentIndex > 0) {
			state.currentIndex--
		}
	},
	
	// 日期选择器改变月份后，currentIndex对应月份
	changeCurrentIndex(state, selectedMonth) {
		state.currentIndex = selectedMonth
	},
	
	// 添加日记按钮
	toggleEditing(state) {
		if (state.editing && state.editing.content) {
			state.selected.monthItem.dailys.unshift({
				id: state.gid,
				title: state.editing.title,
				content: state.editing.content,
				dailyDate: new Date(),
				mood: state.editing.mood,
				deleted: false
			})
			state.gid++
		}
		// 切换
		state.editing = state.editing ? null : { content: '' }
	}
}

export default mutations
const actions = {
// 模拟服务器请求
	toggleEditingAsync({commit}) {
		setTimeout(() => {
			commit('toggleEditing')
		}, 100)
	}
}

export default actions
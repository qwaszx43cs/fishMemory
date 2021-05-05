const actions = {
// 模拟服务器请求
	toggleEditingAsync({commit}) {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					commit('toggleEditing')
				}, 500)
				resolve()
			})
	}
}

export default actions
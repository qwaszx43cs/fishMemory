<template>
	<view class="content">
		<input type="text" v-model="username" placeholder="用户名/邮箱/手机号" />
		<input type="text" v-model="password" password="true" placeholder="密码" />
		<button type="default" @tap="register">注册</button>
		<button type="default" @tap="login">登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: '',
				needPermission: false
			}
		},
		methods: {
			register() {
				uniCloud.callFunction({
					name: 'uni-id-test',
					data: {
						action: 'register',
						params: {
							username: this.username,
							password: this.password,
							needPermission: this.needPermission
						}
					},
					success(res) {
						uni.showModal({
							showCancel: false,
							content: JSON.stringify(res.result)
						})
						uni.setStorageSync('uni_id_token', res.result.token)
						uni.setStorageSync('uni_id_token_expired', res.result.tokenExpired)
					},
					fail(e) {
						console.error(e)
						uni.showModal({
							showCancel: false,
							content: '注册失败，请稍后再试'
						})
					}
				})
			},
			login() {
				uni.showLoading({
					title: '登陆中'
				})
				uniCloud.callFunction({
					name: 'uni-id-test',
					data: {
						action: 'login',
						params: {
							username: this.username,
							password: this.password,
							needPermission: this.needPermission
						}
					},
					success(res) {
						uni.hideLoading()
						uni.setStorageSync('uni_id_token', res.result.token)
						uni.setStorageSync('uni_id_token_expired', res.result.tokenExpired)
						uni.setStorageSync('uid', res.result.uid)
						uni.navigateTo({
								url: '/pages/index/index'
						});		
					},
					fail(e) {
						console.error(e)
						uni.showModal({
							showCancel: false,
							content: '登录失败，请稍后再试'
						})
					}
				})
			},


		}
	}
</script>

<style>

</style>

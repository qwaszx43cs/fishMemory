<template>
	<view class="form-content">

		<u-form :model="dailyForm" ref="dailyForm">
			<u-form-item>
				<button class="" @tap="show = true">
					选择日期
					{{ dailyForm.date }}
				</button>
				<u-picker v-model="show" mode="time" @confirm="cofirm"></u-picker>
			</u-form-item>
			<u-form-item>
				上传图片({{dailyForm.imageList.length}}/6)
				<view class="image-box">
					<view class="imgae-box-item" v-for="(item, index) in dailyForm.imageList" :key="index">
						<!-- 删除按钮 -->
						<view class="close-icon" @tap="delImage(index)">
							<u-icon name="close" color="#fff" size="18"></u-icon>
						</view>
						<!-- 上传按钮 -->
						<view class="image-upload">
							<image :src="item.url" mode="aspectFill"></image>
						</view>
					</view>
					<view class="imgae-box-item">
						<view class="image-upload" @tap="addImage">
							<u-icon name="plus" color="#eee" size="50"></u-icon>
						</view>
					</view>
				</view>


			</u-form-item>
			<u-form-item label="标题">
				<u-input v-model="dailyForm.title" />
			</u-form-item>
			<u-form-item label="心情">
				<u-radio-group v-model="dailyForm.mood">
					<u-radio v-for="(item, index) in moodList" :key="index" :name="item.name" :disabled="item.disabled">
						{{ item.name }}
					</u-radio>
				</u-radio-group>
			</u-form-item>
			<u-form-item label="日记">
				<u-input type="textarea" height="200" v-model="dailyForm.content" />
			</u-form-item>
			<button type="default" @tap="submitDaily">提交</button>
		</u-form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				// 上传图片数组
				dailyForm: {
					title: '',
					content: '',
					mood: '',
					date: '',
					submitDate: '',
					imageList: [],
				},
				moodList: [{
						name: '开心',
						disabled: false
					},
					{
						name: '伤心',
						disabled: false
					}
				],
			};
		},
		methods: {
			//  添加照片
			addImage() {
				let _this = this;
				const count = 6 - _this.dailyForm.imageList.length;
				uni.chooseImage({
					// 最多上传图片数
					count: count,
					// sucess回调函数是普通函数调用，默认this指向全局
					success(chooseImageRes) {
						// 图片的本地文件路径列表 tempFilePaths
						const tempFilePaths = chooseImageRes.tempFilePaths;
						tempFilePaths.forEach((item, index) => {
							// 处理H5可以多选图片的状况
							if (index < count) {
								_this.dailyForm.imageList.push({
									url: item
								});
							} else {
								uni.showToast({
									title: '最多添加六张照片',
									icon: none,
									duration: 2000
								});
							}
						})
					}
				})
			},

			// 删除照片
			delImage(index) {
				// 删除当前照片
				this.dailyForm.imageList.splice(index, 1);
			},

			// 日记内容提交
			cofirm(e) {
				const {
					year,
					month,
					day
				} = e;
				this.dailyForm.date = `${year}-${month}-${day}`;
			},


			// 提交照片
			async upLoadFile(filePath) {
				const res = await uniCloud.uploadFile({
					filePath: filePath,
					// uniCloud.uploadFile请求必须携带cloudPath参数。
					// cloudPath：阿里云的云端文件名，设置为uni.chooseImage返回的tempFilePath(图片的本地文件路径)后可以在云存储中预览图片
					cloudPath: filePath
				});
				return res.filePath;
			},


			// 上传日记
			async submitDaily() {
				uni.showLoading();

				// 上传日记图片内容
				let uploadImageList = [];
				for (let i of this.dailyForm.imageList) {
					let res = await this.upLoadFile(i.url);
					uploadImageList.push(res);
				}
				
				uniCloud.callFunction({
					name: 'update_daily',
					data: {
						uid: uni.getStorageSync('uid'),
						dailyForm: this.dailyForm,
					}
				}).then((res) => {
					uni.hideLoading();
					uni.showToast({
						title: '日记上传成功'
					})
				}).catch((err) => {
					uni.hideLoading();
					uni.showToast({
							title: '日记上传失败'
						})
					
				})
			},


			// 上传日记标题等文本内容
			updateDailyText({ title,content,mood,date }) {
				this.$api.update_daily({
					title,
					content,
					mood,
					date,
				}).then((res) => {
					
				})
			}
		}
	};
</script>

<style lang="scss">
	.form-content {
		margin-top: 200rpx;



		.image-box {
			display: flex;
			flex-wrap: wrap;
			padding: 20rpx;

			.imgae-box-item {
				position: relative;
				width: 33.33%;
				height: 0;
				padding-top: 33.33%;
				box-sizing: border-box;

				.close-icon {
					display: flex;
					justify-content: center;
					align-items: center;
					position: absolute;
					top: 0;
					right: 0;
					width: 44rpx;
					height: 44rpx;
					background-color: red;
					border-radius: 50%;
					z-index: 2;
				}

				.image-upload {
					display: flex;
					justify-content: center;
					align-items: center;
					position: absolute;
					top: 10rpx;
					right: 10rpx;
					bottom: 10rpx;
					left: 10rpx;
					border: 2rpx solid #EEEEEE;
					border-radius: 10rpx;
					overflow: hidden;

					image {
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
</style>

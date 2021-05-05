<template>
	<transition name="submit">
		<view class="submit-daily" v-if="!!editing">
			<app-bar title="Submit Daily" left="times" @left="toggleEditing" />
			<view class="submit-daily_from">
				<view class="submit-daily_meta">
					<view>
						<view class="submit-daily_imagebox">
							<view class="submit-daily_addimage">
								<i class="fa fa-plus"></i>
							</view>
						</view>
					</view>
					<view class="submit-daily_contentbox">
						<view class="submit-daily_title">
							<i class="fa fa-pencil"></i>
							<u-input v-model="editing.title" :border="false" placeholder="Title" />
						</view>
						<view class="submit-daily_mood">
							<u-radio-group v-model="editing.mood">
								<i class="fa fa-meh-o"></i>
								<u-radio v-for="(item, index) in moodList" :key="index" :name="item.name" :disabled="item.disabled">
									{{ item.name }}
								</u-radio>
							</u-radio-group>
						</view>
							<view class="submit-daily_content">
								<view>
									<u-input type="textarea" height="200" v-model="editing.content" placeholder="Record Your Day..."/>
								</view>
							</view>
						</view>
				</view>
			</view>
		</view>
	</transition>
</template>

<script>
	import AppBar from './AppBar'
	import { mapState, mapMutations } from 'vuex'
	export default {
		components: {
			AppBar
		},
		computed: {
			...mapState(['editing', 'moodList'])
		},
		methods: {
			...mapMutations(['toggleEditing'])
		}
	}
</script>

<style lang="scss">
	
	.submit-daily {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		border-radius: 0;
		background-color: white;
		color: #666;
		will-change: transform;		
		i {
				margin-right: 5%;
			}
		
	}
		
	.submit-daily_imagebox {
		height: 400rpx;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #dadce1;
		
		.submit-daily_addimage {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 120rpx;
			width: 120rpx;
			background-color: gray;
			
			i {
				font-size: 1.6rem;
				color: white
			}
		}
	}
	
	.submit-daily_title {
		display: flex;
		align-items: center;
		margin: 30rpx 0;
		
	}
	
	.u-radio-group {
		display: flex;
		align-items: center;
		width: 100%;
		margin-bottom: 30rpx;
	}
	
	.submit-daily_contentbox {
		padding: 0 5%;
	}
	
	.submit-daily_content {
		border-top: 1rpx solid #C0C0C0;
		padding-top: 20rpx;
	}
	.submit-leave-to,
	.submit-enter {
	  transform: translateY(100%);
	}
	.submit-enter-to,
	.submit-leave {
	  transform: translateY(0);
	}
	.submit-enter-active {
	  transition: all 0.5s ease;
	}
	.submit-leave-active {
	  transition: all 0.5s ease;
	}

</style>

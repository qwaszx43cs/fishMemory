import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import api from './common/api'
import store from './store'
import moment from 'moment'
import {router, RouterMount} from './router/router.js'
import './static/font-awesome-4.7.0/css/font-awesome.css'
import 'uview-ui/index.scss'

Vue.config.productionTip = false
Vue.use(uView)
Vue.use(router)

Vue.prototype.$api = api
Vue.prototype.moment = moment

// 全局过滤
Vue.filter('fmt', (v) => {
	return moment(v).format('MM-DD')
})

App.mpType = 'app'

const app = new Vue({
    ...App,
		store
})


//v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// #ifdef H5
	RouterMount(app,router,'#app')
// #endif

// #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif

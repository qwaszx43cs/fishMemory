// router.js
import {RouterMount,createRouter} from 'uni-simple-router';

const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,  
	routes: [...ROUTES]
});

//全局路由前置守卫
// router.beforeEach((to, from, next) => {
// 	//  to要进入的路由
// 	if (to.path === '/pages/login/login') {
// 		next()
// 	} else {
// 		// 获取token
// 		let token = localStorage.getItem('uni_id_token')
// 		if (token === null || token === '') {
// 			next('/pages/login/login')
// 		} else {
// 			next()
// 		}
// 	}
// });

export {
	router,
	RouterMount
}

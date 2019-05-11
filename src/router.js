import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import quotaManage from '@/views/sideMenu/quotaManage.vue'
import assessmentManage from '@/views/sideMenu/assessmentManage.vue'
import assessmentResult from '@/views/sideMenu/assessmentResult.vue'
import indicators from '@/views/indicators/indexes'
Vue.use(Router)

export default new Router({
	routes: [
		{ path: '/', name: 'home', component: Home },

		{
			path: '/',
			component: Home,
			redirect: '/star',
			name: '',
			children: [
				{
					path: '/quotaManage',
					name: '指标管理',
					component: quotaManage,
					//新增
					// children: [
					// 	{
					// 		path: 'indexes',
					// 		name: '新增',
					// 		component: indicators,
					// 	}
					// ],
				},
				{ path: '/assessmentManage', name: '考核管理', component: assessmentManage },
				{ path: '/assessmentResult', name: '考核结果', component: assessmentResult },
				{ path: '/indexes', name: '考核结果', component: indicators },

			]
		}

	]
})

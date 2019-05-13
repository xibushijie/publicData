import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import quotaManage from '@/views/sideMenu/quotaManage/quotaManage.vue'
import quotaManageAdd from '@/views/sideMenu/quotaManage/add.vue'
import quotaManageEdit from '@/views/sideMenu/quotaManage/edit.vue'

import assessmentManage from '@/views/sideMenu/assessmentManage/assessmentManage.vue'
// import quotaManageAdd from '@/views/sideMenu/quotaManage/add.vue'
// import quotaManageEdit from '@/views/sideMenu/quotaManage/edit.vue'

import assessmentResult from '@/views/sideMenu/assessmentResult/assessmentResult.vue'
// import quotaManageAdd from '@/views/sideMenu/quotaManage/add.vue'
// import quotaManageEdit from '@/views/sideMenu/quotaManage/edit.vue'


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
				{ path: '/quotaManage', name: '指标管理', component: quotaManage, },
				{ path: '/quotaManage/add', name: '指标管理添加', component: quotaManageAdd, },
				{ path: '/quotaManage/edit', name: '指标管理编辑', component: quotaManageEdit, },

				{ path: '/assessmentManage', name: '考核管理', component: assessmentManage },
				// { path: '/quotaManage/add', name: '指标管理添加', component: quotaManageAdd, },
				// { path: '/quotaManage/edit', name: '指标管理编辑', component: quotaManageEdit, },

				{ path: '/assessmentResult', name: '考核结果', component: assessmentResult },
				// { path: '/quotaManage/add', name: '指标管理添加', component: quotaManageAdd, },
				// { path: '/quotaManage/edit', name: '指标管理编辑', component: quotaManageEdit, },
			]
		}

	]
})

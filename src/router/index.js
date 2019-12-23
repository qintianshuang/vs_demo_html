import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import ElementUI from 'element-ui'
import Home from '@/views/common/home'
import Plan from '@/views/plan/year'
import Season from '@/views/plan/season'
import Month from '@/views/plan/month'
import User from '@/views/manage/user'
import Role from '@/views/manage/role'
import Main from '@/views/manage/main'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })
Vue.use(Router)
Vue.use(iView)

// menuShow 是否在导航栏中显示
// menuName导航栏中显示的名称
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        menuShow: true,
        menuName: '系统管理',
        menuStyle: 'ios-apps'
      },
      children: [
        {
          path: '/manage/user',
          name: 'user',
          component: User,
          meta: {
            menuShow: true,
            menuName: '用户管理',
            menuStyle: 'ios-man'
          }
        },
        {
          path: '/manage/role',
          name: 'role',
          component: Role,
          meta: {
            menuShow: true,
            menuName: '权限管理',
            menuStyle: 'ios-key'
          }
        },
        {
          path: '/manage/main',
          name: 'main',
          component: Main,
          meta: {
            menuShow: true,
            menuName: '菜单管理',
            menuStyle: 'ios-grid'
          }
        }
      ]
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        menuShow: true,
        menuName: '计划管理',
        menuStyle: 'md-construct'
      },
      children: [
        {
          path: '/common/plan',
          name: 'plan',
          component: Plan,
          meta: {
            menuShow: true,
            menuName: '年度计划',
            menuStyle: 'logo-buffer'
          }
        },
        {
          path: '/common/season',
          name: 'season',
          component: Season,
          meta: {
            menuShow: true,
            menuName: '季度计划',
            menuStyle: 'md-contacts'
          }
        },
        {
          path: '/common/month',
          name: 'month',
          component: Month,
          meta: {
            menuShow: true,
            menuName: '月度计划',
            menuStyle: 'ios-cog'
          }
        }
      ]
    }
  ]
})

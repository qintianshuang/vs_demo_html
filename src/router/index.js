import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'
// import ElementUI from 'element-ui'

// import Routers from './router'
import 'iview/dist/styles/iview.css'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/components/Layout'
import Login from '@/components/login'
import Home from '@/components/home'
import Index from '@/components/common/index'
import IndexSelect from '@/components/common/indexSelect'
import LoadMoreUp from '@/components/common/loadMoreUp'
import Year from '@/components/common/year'
import Month from '@/components/common/month'
import Plan from '@/components/common/plan'

Vue.use(Router)
Vue.use(iView)

// menuShow 是否在导航栏中显示
// menuName导航栏中显示的名称
export default new Router({
  routes: [
    // {
    //   path: '/',
    //   redirect: '/home',
    //   meta: {
    //     menuShow: false
    //   }
    // },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: Home,
    //   meta: {
    //     menuShow: false
    //   }
    // },
    // {
    //   path: '/common/index',
    //   name: 'index',
    //   component: Index
    // },
    // {
    //   path: '/common/indexSelect',
    //   name: 'indexSelect',
    //   component: IndexSelect
    // },
    // {
    //   path: '/common/loadMoreUp',
    //   name: 'loadMoreUp',
    //   component: LoadMoreUp
    // },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        menuShow: true,
        menuName: '系统管理',
        menuStyle: 'md-construct'
      },
      children: [
        {
          path: '/common/index',
          name: 'index',
          component: Index,
          meta: {
            menuShow: true,
            menuName: '组织架构',
            menuStyle: 'logo-buffer'
          }
        },
        {
          path: '/common/indexSelect',
          name: 'indexSelect',
          component: IndexSelect,
          meta: {
            menuShow: true,
            menuName: '用户管理',
            menuStyle: 'md-contacts'
          }
        },
        {
          path: '/common/loadMoreUp',
          name: 'loadMoreUp',
          component: LoadMoreUp,
          meta: {
            menuShow: true,
            menuName: '系统设置',
            menuStyle: 'ios-cog'
          }
        }
      ]
    }
    ,
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        menuShow: true,
        menuName: '计划管理',
        menuStyle: 'ios-apps'
      },
      children: [
        {
          path: '/common/year',
          name: 'year',
          component: Year,
          meta: {
            menuShow: true,
            menuName: '年度计划',
            menuStyle: 'md-browsers'
          }
        },
        {
          path: '/common/month',
          name: 'month',
          component: Month,
          meta: {
            menuShow: true,
            menuName: '月度计划',
            menuStyle: 'md-moon'
          }
        },
        {
          path: '/common/plan',
          name: 'plan',
          component: Plan,
          meta: {
            menuShow: true,
            menuName: '推送计划',
            menuStyle: 'ios-partly-sunny'
          }
        }
      ]
    }
  ]
})

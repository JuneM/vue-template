import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 账户管理
const accountManagement = r => require.ensure([], () => r(require('../views/account_management/')), 'accountManagement')
// 用户管理
const userManagement = r => require.ensure([], () => r(require('../views/user_management/')), 'userManagement')
// 充值管理
const rechargeManagement = r => require.ensure([], () => r(require('../views/recharge_management/')), 'rechargeManagement')
// 提现管理
const withManagement = r => require.ensure([], () => r(require('../views/with_management/')), 'withManagement')
// 广告需求管理
const advManagement = r => require.ensure([], () => r(require('../views/adv_management/')), 'advManagement')
// 服务产品管理
const serviceManagement = r => require.ensure([], () => r(require('../views/service_management/')), 'serviceManagement')
// 订单管理
const orderManagement = r => require.ensure([], () => r(require('../views/order_management/')), 'orderManagement')
// 计划管理
const planManagement = r => require.ensure([], () => r(require('../views/plan_management/')), 'planManagement')
// 手续费率调控管理
const poundageManagement = r => require.ensure([], () => r(require('../views/poundage_management/')), 'poundageManagement')
// 扣费记录管理
const chargingManagement = r => require.ensure([], () => r(require('../views/charging_management/')), 'chargingManagement')
// 数据分析
const dataAnalysis = r => require.ensure([], () => r(require('../views/data_analysis/')), 'dataAnalysis')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'accountManagement',
      component: accountManagement
    },
    {
      path: '/user',
      name: 'userManagement',
      component: userManagement
    },
    {
      path: '/recharge',
      name: 'rechargeManagement',
      component: rechargeManagement
    },
    {
      path: '/with',
      name: 'withManagement',
      component: withManagement
    },
    {
      path: '/adv',
      name: 'advManagement',
      component: advManagement
    },
    {
      path: '/service',
      name: 'serviceManagement',
      component: serviceManagement
    },
    {
      path: '/order',
      name: 'orderManagement',
      component: orderManagement
    },
    {
      path: '/plan',
      name: 'planManagement',
      component: planManagement
    },
    {
      path: '/poundage',
      name: 'poundageManagement',
      component: poundageManagement
    },
    {
      path: '/charging',
      name: 'chargingManagement',
      component: chargingManagement
    },
    {
      path: '/dataAnalysis',
      name: 'dataAnalysis',
      component: dataAnalysis
    },
    // 重定向
    {
      path: '*',
      redirect: {
        name: 'accountManagement'
      }
    }
  ]
})

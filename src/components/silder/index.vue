<template>
  <div class="layout">
    <div class="mu-paper mu-drawer app-drawer mu-paper-round mu-paper-1" :class="{open: !hiddenNav}" style="width: 220px">
      <mu-appbar :title="title"></mu-appbar>
      <div class="mu-list">
        <mu-list :value="active">
          <mu-list-item title="账户管理" value="accountManagement" href="#/">
          </mu-list-item>
          <mu-list-item title="用户管理" value="userManagement" href="#/user">
          </mu-list-item>
          <mu-list-item title="充值管理" value="rechargeManagement" href="#/recharge">
          </mu-list-item>
          <mu-list-item title="提现管理" value="withManagement" href="#/with">
          </mu-list-item>
          <mu-list-item title="广告需求管理" value="advManagement" href="#/adv">
          </mu-list-item>
          <mu-list-item title="服务产品管理" value="serviceManagement" href="#/service">
          </mu-list-item>
          <mu-list-item title="订单管理" value="orderManagement" href="#/order">
          </mu-list-item>
          <mu-list-item title="计划管理" value="planManagement" href="#/plan">
          </mu-list-item>
          <mu-list-item title="手续费率调控管理" value="poundageManagement" href="#/poundage">
          </mu-list-item>
          <mu-list-item title="扣费记录管理" value="chargingManagement" href="#/charging">
          </mu-list-item>
          <mu-list-item title="数据分析" value="dataAnalysis" href="#/dataAnalysis">
          </mu-list-item>
        </mu-list>
      </div>
    </div>
    <div class="content-right" :style="{'margin-left': hiddenNav ? 0 : '220px', width: hiddenNav ? '100%' : 'calc(100% - 220px)'}">
      <mu-appbar :title="name">
        <mu-icon-button icon="menu" slot="left" @click="hidden"/>
        <mu-list-item title="图片" disabled slot="right">
          <mu-avatar slot="left" src="/images/uicon.jpg"/>
        </mu-list-item>
      </mu-appbar>
      <div class="content-body">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '网盟管理系统'
    }
  },
  data() {
    return {
      titleMap: {
        accountManagement: '账户管理',
        userManagement: '用户管理',
        rechargeManagement: '充值管理',
        withManagement: '提现管理',
        advManagement: '广告需求管理',
        serviceManagement: '服务产品管理',
        orderManagement: '订单管理',
        planManagement: '计划管理',
        poundageManagement: '手续费率调控管理',
        chargingManagement: '扣费记录管理',
        dataAnalysis: '数据分析'
      },
      active: '',
      name: '',
      hiddenNav: false
    }
  },
  watch: {
    $route(to, from) {
      this.active = to.name
      this.name = this.titleMap[to.name]
      document.title = this.name
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    hidden() {
      this.hiddenNav = !this.hiddenNav
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
$leftDist: 220px;

.layout{
  background-color:white;
}

.header{
  background-color: #7e57c2;
}

.logo{
  font-size: 24px;
  color: white;
  display: inline-block;
  padding: 10px 20px;
}

.content-right{
  display: inline-block;
  margin-left: $leftDist;
  width: calc(100% - 220px);
  background-color: #fff;
  -webkit-transition: all .45s cubic-bezier(.23,1,.32,1);
  transition: all .45s cubic-bezier(.23,1,.32,1);
}
.content-body {
  padding: 10px 20px;
}
.breadcrumb{
  margin: 10px 0;
}

.body{
  background-color: white;
  border-radius: 5px;
  min-height: 500px;
}
</style>

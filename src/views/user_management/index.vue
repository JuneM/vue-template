<template>
  <div class="account">
    <div class="account-content" v-if="$route.query.type === '' || !$route.query.type">
      <div class="clearfix">
        <div class="search pull-left">
          <input class="" v-model.trim="search" @keydown.enter="searchKey"/>&nbsp;&nbsp;&nbsp;
          <mu-raised-button label="查询" primary @click="searchKey"/>
          <p >(根据账号或者姓名来搜索)</p>
        </div>
      </div>
      <mu-table multiSelectable :showCheckbox="false" ref="table">
        <mu-thead>
          <mu-tr>
            <mu-th width="100">账户</mu-th>
            <mu-th width="100">姓名</mu-th>
            <mu-th width="120">身份证号</mu-th>
            <mu-th width="120">手机号码</mu-th>
            <mu-th width="120">邮箱地址</mu-th>
            <mu-th width="120">银行卡</mu-th>
            <mu-th width="150">角色</mu-th>
            <mu-th width="150">最后登录</mu-th>
            <mu-th width="150">操作</mu-th>
          </mu-tr>
        </mu-thead>
        <mu-tbody>
          <mu-tr>
            <mu-td>123</mu-td>
            <mu-td>John Smith</mu-td>
            <mu-td>4401831992090918328</mu-td>
            <mu-td>183849320449</mu-td>
            <mu-td>123456@qq.com</mu-td>
            <mu-td>123456</mu-td>
            <mu-td>流量主/广告商</mu-td>
            <mu-td>2017-07-02 19:59:05</mu-td>
            <mu-td>
              <mu-raised-button label="编辑"  primary/>
              <mu-raised-button label="修改密码" primary/>
            </mu-td>
          </mu-tr>
        </mu-tbody>
      </mu-table>
      <mu-pagination class="page pull-right" :total="total" :current="current" @pageChange="handleClick">
      </mu-pagination>
    </div>
  </div>
</template>

<script>
import { goRoute } from 'utils/'

const obj = {
  account: '',
  name: '',
  role: '',
  chargingMode: ''
}
export default {
  name: 'account_management',
  data() {
    return {
      search: this.$route.query.search || '',
      total: 500,
      current: 1,
      dataObj: Object.assign({}, obj),
      sureBtn: '新建'
    }
  },
  created() {
  },
  methods: {
    searchKey() {
      this.search && goRoute(this.$route, {
        search: this.search
      })
    },
    handleClick(newIndex) {
    },
    newAccount() {
      this.dataObj = Object.assign({}, obj)
      this.goRoute({
        type: 'edit'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
</style>

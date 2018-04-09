<template>
  <div class="account">
    <div class="account-content" v-if="$route.query.type === '' || !$route.query.type">
      <div class="clearfix">
        <div class="search pull-left">
          <input class="" v-model.trim="search" @keydown.enter="searchKey"/>&nbsp;&nbsp;&nbsp;
          <mu-raised-button label="查询" primary @click="searchKey"/>
          <p >(根据账号或者姓名来搜索)</p>
        </div>
        <div class="new-btn pull-right">
          <mu-raised-button label="新建" @click="newAccount"  primary/>
        </div>
      </div>
      <mu-table multiSelectable :showCheckbox="false" ref="table">
        <mu-thead>
          <mu-tr>
            <mu-th width="100">账户</mu-th>
            <mu-th width="100">姓名</mu-th>
            <mu-th width="100">角色</mu-th>
            <mu-th >最后登录</mu-th>
            <mu-th >操作</mu-th>
          </mu-tr>
        </mu-thead>
        <mu-tbody>
          <mu-tr>
            <mu-td>1</mu-td>
            <mu-td>John Smith</mu-td>
            <mu-td>Employed</mu-td>
            <mu-td>Employed</mu-td>
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
    <div v-else-if="$route.query.type === 'edit'">
      <mu-text-field label="账户" :disabled="dataObj.id" v-model="dataObj.account" labelFloat/><br/>
      <mu-text-field label="姓名" v-model="dataObj.name" labelFloat/><br/>
      <mu-select-field v-model="dataObj.role" label="角色">
        <mu-menu-item value="客服" title="客服"/>
        <mu-menu-item value="财务" title="财务"/>
        <mu-menu-item value="管理员" title="管理员"/>
      </mu-select-field><br/>
      <mu-select-field v-if="dataObj.role === '财务'" v-model="dataObj.chargingMode" label="计费模式">
        <mu-menu-item value="cpc" title="cpc"/>
        <mu-menu-item value="cpa" title="cpa"/>
        <mu-menu-item value="cpv" title="cpv"/>
        <mu-menu-item value="cpm" title="cpm"/>
        <mu-menu-item value="cps" title="cps"/>
        <mu-menu-item value="按UV数计算" title="按UV数计算"/>
        <mu-menu-item value="按IP数计算" title="按IP数计算"/>
        <mu-menu-item value="按时间周期计算" title="按时间周期计算"/>
      </mu-select-field>
      <div style="width: 256px;text-align: center">
        <mu-raised-button :label="sureBtn" primary/>
      </div>
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
p {
  margin: 5px;
}
.page {
  margin: 15px 0;
}
</style>

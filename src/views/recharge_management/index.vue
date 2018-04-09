<template>
  <div class="account">
    <div class="account-content" v-if="$route.query.type === '' || !$route.query.type">
      <div class="clearfix">
        <div class="search">
          <div class="inline-block user">
            <span class="mr5">用户名</span>
            <mu-text-field v-model="searchObj.searchKey"/>
          </div>
          <div class="inline-block with-time">
            <span class="mr5">充值日期</span>
            <mu-date-picker container="inline" mode="landscape" v-model="searchObj.beginTime" hintText="开始时间"/>----
            <mu-date-picker container="inline" mode="landscape" v-model="searchObj.endTime" hintText="结束时间"/>
          </div>
          <div class="inline-block with-money">
            <span class="mr5">金额</span>
            <mu-text-field v-model="searchObj.beginMoney"/>----
            <mu-text-field v-model="searchObj.endMoney" />
          </div>
          <mu-raised-button label="查询" primary @click="searchKey"/>
        </div>
      </div>
      <mu-table multiSelectable :showCheckbox="false" ref="table">
        <mu-thead>
          <mu-tr>
            <mu-th>用户名</mu-th>
            <mu-th>说明</mu-th>
            <mu-th>充值时间</mu-th>
            <mu-th>金额</mu-th>
          </mu-tr>
        </mu-thead>
        <mu-tbody>
          <mu-tr>
            <mu-td>123</mu-td>
            <mu-td>John Smith</mu-td>
            <mu-td>4401831992090918328</mu-td>
            <mu-td>183849320449</mu-td>
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

const Obj = {
  searchKey: '',
  beginTime: '',
  endTime: '',
  beginMoney: '',
  endMoney: ''
}
export default {
  name: 'account_management',
  data() {
    return {
      total: 500,
      current: 1,
      searchObj: Object.assign({}, Obj)
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.searchObj = Object.assign({}, this.$route.query)
    },
    searchKey() {
      goRoute(this.$router, this.searchObj)
    },
    handleClick(newIndex) {
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
</style>

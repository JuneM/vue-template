<template>
  <div class="account">
    <div class="account-content" v-if="$route.query.type === '' || !$route.query.type">
      <div class="clearfix">
        <div class="search pull-left">
          <div class="search">
            <div class="inline-block user">
              <span class="mr5">广告商</span>
              <mu-text-field v-model="searchObj.searchKey"/>
            </div>
            <div class="inline-block user">
              <span class="mr5">计划编号</span>
              <mu-text-field v-model="searchObj.planNumber"/>
            </div>
            <div class="inline-block with-time">
              <span class="mr5">扣费日期</span>
              <mu-date-picker container="inline" mode="landscape" v-model="searchObj.beginTime" hintText="开始时间"/>----
              <mu-date-picker container="inline" mode="landscape" v-model="searchObj.endTime" hintText="结束时间"/>
            </div>
            <div class="inline-block with-money">
              <span class="mr5">金额</span>
              <mu-text-field v-model="searchObj.beginMoney"/>----
              <mu-text-field v-model="searchObj.endMoney" />
            </div>
            <mu-raised-button label="查询" style="vertical-align: top;" primary @click="searchKey"/>
          </div>
        </div>
      </div>
      <mu-table multiSelectable :showCheckbox="false" ref="table">
          <mu-thead>
            <mu-tr>
              <mu-th>广告商</mu-th>
              <mu-th>计划编号</mu-th>
              <mu-th>扣费时间</mu-th>
              <mu-th>金额</mu-th>
            </mu-tr>
          </mu-thead>
          <mu-tbody>
            <mu-tr>
              <mu-td>詹帅</mu-td>
              <mu-td>123</mu-td>
              <mu-td>{{new Date() | formateDate('yyyy-MM-dd')}}</mu-td>
              <mu-td>10000</mu-td>
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
  planNumber: '',
  beginTime: '',
  endTime: '',
  beginMoney: '',
  endMoney: ''
}
export default {
  name: 'charging_management',
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

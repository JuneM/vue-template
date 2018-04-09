<template>
  <div class="account">
    <div class="account-content" v-if="$route.query.type === '' || !$route.query.type">
      <div class="clearfix">
        <div class="search pull-left">
          <div class="search">
            <div class="inline-block user">
              <span class="mr5">计划编号</span>
              <mu-text-field v-model="searchObj.searchKey"/>
            </div>
            <div class="inline-block user">
              <span class="mr5">项目名</span>
              <mu-text-field v-model="searchObj.project"/>
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
            <div class="inline-block with-money">
              <span class="mr5" style="float: left;margin-top: 12px;">状态</span>
              <mu-select-field v-model="searchObj.status">
                <mu-menu-item value="1" title="阴阳师"/>
                <mu-menu-item value="2" title="影之刃"/>
                <mu-menu-item value="3" title="天下HD"/>
                <mu-menu-item value="4" title="穿越火线"/>
                <mu-menu-item value="5" title="英雄联盟"/>
                <mu-menu-item value="6" title="王者荣耀"/>
              </mu-select-field>
            </div>
            <mu-raised-button label="查询" style="vertical-align: top;" primary @click="searchKey"/>
          </div>
        </div>
      </div>
      <mu-table multiSelectable :showCheckbox="false" ref="table">
          <mu-thead>
            <mu-tr>
              <mu-th>订单编号</mu-th>
              <mu-th>项目名</mu-th>
              <mu-th>开始时间</mu-th>
              <mu-th>姓名进度</mu-th>
              <mu-th>金额</mu-th>
              <mu-th>状态</mu-th>
              <mu-th>实时扣费</mu-th>
            </mu-tr>
          </mu-thead>
          <mu-tbody>
            <mu-tr>
              <mu-td>123</mu-td>
              <mu-td>詹帅</mu-td>
              <mu-td>2018-01-01 09:00:00</mu-td>
              <mu-td>10%</mu-td>
              <mu-td>10000</mu-td>
              <mu-td>审核中</mu-td>
              <mu-td>100</mu-td>
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
  project: '',
  beginTime: '',
  endTime: '',
  beginMoney: '',
  endMoney: '',
  status: ''
}
export default {
  name: 'plan_management',
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

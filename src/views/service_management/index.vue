<template>
  <div class="account">
    <div class="account-content" v-if="$route.query.type === '' || !$route.query.type">
      <div class="clearfix">
        <div class="search pull-left">
          <div class="search">
            <div class="inline-block user">
              <span class="mr5">产品名称</span>
              <mu-text-field v-model="searchObj.searchKey"/>
            </div>
            <div class="inline-block with-money">
              <span class="mr5" style="float: left;margin-top: 12px;">计费模式</span>
              <mu-select-field v-model="searchObj.billing">
                <mu-menu-item value="1" title="阴阳师"/>
                <mu-menu-item value="2" title="影之刃"/>
                <mu-menu-item value="3" title="天下HD"/>
                <mu-menu-item value="4" title="穿越火线"/>
                <mu-menu-item value="5" title="英雄联盟"/>
                <mu-menu-item value="6" title="王者荣耀"/>
              </mu-select-field>
            </div>
            <div class="inline-block with-money">
              <span class="mr5" style="float: left;margin-top: 12px;">终端要求</span>
              <mu-select-field v-model="searchObj.terminal">
                <mu-menu-item value="1" title="阴阳师"/>
                <mu-menu-item value="2" title="影之刃"/>
                <mu-menu-item value="3" title="天下HD"/>
                <mu-menu-item value="4" title="穿越火线"/>
                <mu-menu-item value="5" title="英雄联盟"/>
                <mu-menu-item value="6" title="王者荣耀"/>
              </mu-select-field>
            </div>
            <div class="inline-block with-money">
                <span class="mr5" style="float: left;margin-top: 12px;">排期模式</span>
                <mu-select-field v-model="searchObj.schedule">
                  <mu-menu-item value="1" title="阴阳师"/>
                  <mu-menu-item value="2" title="影之刃"/>
                  <mu-menu-item value="3" title="天下HD"/>
                  <mu-menu-item value="4" title="穿越火线"/>
                  <mu-menu-item value="5" title="英雄联盟"/>
                  <mu-menu-item value="6" title="王者荣耀"/>
                </mu-select-field>
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
            <div class="inline-block user">
              <span class="mr5">流量商</span>
              <mu-text-field v-model="searchObj.providers"/>
            </div>
            <mu-raised-button label="查询" style="vertical-align: top;" primary @click="searchKey"/>
          </div>
        </div>
      </div>
      <mu-table multiSelectable :showCheckbox="false" ref="table">
        <mu-thead>
          <mu-tr>
            <mu-th>产品名称</mu-th>
            <mu-th>计费模式</mu-th>
            <mu-th>终端要求</mu-th>
            <mu-th>排期模式</mu-th>
            <mu-th>广告商</mu-th>
            <mu-th>责任客户</mu-th>
            <mu-th>状态</mu-th>
          </mu-tr>
        </mu-thead>
        <mu-tbody>
          <mu-tr>
            <mu-td>张三</mu-td>
            <mu-td>cpc</mu-td>
            <mu-td>pc端</mu-td>
            <mu-td>10000</mu-td>
            <mu-td>名字（链接到用户信息页）</mu-td>
            <mu-td>名字（链接到用户信息页）</mu-td>
            <mu-td>审核中</mu-td>
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
  status: '',
  terminal: '',
  billing: '',
  schedule: '',
  providers: ''
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

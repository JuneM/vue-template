<template>
  <div class="account">
    <div class="account-content" v-if="$route.query.type === '' || !$route.query.type">
      <div class="clearfix">
        <div class="search pull-left">
          <div class="search">
            <div class="inline-block with-time">
              <span class="mr5">日期</span>
              <mu-date-picker container="inline" mode="landscape" v-model="searchObj.beginTime" hintText="开始时间"/>----
              <mu-date-picker container="inline" mode="landscape" v-model="searchObj.endTime" hintText="结束时间"/>
            </div>
            <mu-raised-button v-if="$route.query.searchKey === '运营商'" primary label="运营商" style="vertical-align: top;" @click="searchKey('运营商')"/>
            <mu-raised-button v-else label="运营商" style="vertical-align: top;" @click="searchKey('运营商')"/>
            <mu-raised-button v-if="$route.query.searchKey === '地区'" primary label="地区" style="vertical-align: top;" @click="searchKey('地区')"/>
            <mu-raised-button v-else label="地区" style="vertical-align: top;" @click="searchKey('地区')"/>
          </div>
        </div>
      </div>
      <div class="show-data">
        <div class="data-item data-pv">
          <p>浏览次数（pv）</p>
          <p>1000</p>
        </div>
        <div class="data-item data-uv">
          <p>独立访客（uv）</p>
          <p>1000</p>
        </div>
        <div class="data-item data-ip">
          <p>IP</p>
          <p>100</p>
        </div>
        <div class="data-item data-out">
          <p>跳出率</p>
          <p>30.01%</p>
        </div>
      </div>
      <div class="select-index">
        <span class="mr5" style="float: left;margin-top: 12px;">选择指标</span>
        <mu-select-field v-model="searchObj.status" style="width: 156px; text-align: center">
          <mu-menu-item value="ip" title="ip"/>
          <mu-menu-item value="pv" title="pv"/>
          <mu-menu-item value="uv" title="uv"/>
        </mu-select-field>
      </div>
    </div>
  </div>
</template>

<script>
import { goRoute } from 'utils/'

const Obj = {
  searchKey: '',
  beginTime: '',
  endTime: '',
  status: ''
}
export default {
  name: 'data_analysis',
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
    searchKey(key) {
      this.searchObj.searchKey = key
      goRoute(this.$router, this.searchObj)
    },
    handleClick(newIndex) {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
.show-data {
  border: 1px solid #eee;
  width: 640px;
  text-align: center;
  padding: 10px 0;
  .data-item {
    display: inline-block;
    width: 150px;
    p:first-child {
      font-weight: bold;
      font-size: 18px;
    }
  }
}
</style>

<template>
  <div class="account">
    <div class="account-content" v-if="$route.query.type === '' || !$route.query.type">
      <div class="clearfix">
        <div>
          <span>手续费率</span><input type="number" step="0.1" min="0" v-model="poundage" style="margin-left: 20px;margin-right: 10px">%
        </div>
        <mu-raised-button label="修改" style="margin-left: 150px;margin-top: 20px;" primary @click="changePoundage"/>
      </div>
    </div>
  </div>
</template>

<script>
// import { goRoute } from 'utils/'

export default {
  name: 'poundage_management',
  data() {
    return {
      poundage: 0
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
    },
    changePoundage() {
      // goRoute(this.$router, this.searchObj)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
</style>

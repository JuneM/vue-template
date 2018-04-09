<template>
  <div id="app">
    <silder>
      <div slot="content">
        <router-view/>
      </div>
    </silder>
  </div>
</template>

<script>
import silder from 'components/silder/'

export default {
  name: 'App',
  data() {
    return {

    }
  },
  created() {
  },
  mounted() {
  },
  components: {
    silder
  }
}
</script>

<style>
  @import './assets/css/index.css';
</style>
<style lang="scss" rel="stylesheet/scss">
  @import './assets/css/normal';
</style>

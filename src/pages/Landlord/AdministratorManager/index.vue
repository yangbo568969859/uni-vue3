<template>
  <view class="content">
    AdministratorManager
    <!-- <CustomTabBar :current="1" /> -->
  </view>
</template>

<script>
// import CustomTabBar from '@/custom-tab-bar/index.vue'
export default {
  components: {
    // CustomTabBar
  },
  data() {
    return {
      title: 'Hello',
    }
  },
  onLoad() {},
  onShow () {
    console.log('onShow AdministratorManager')
    if (typeof this.$scope.getTabBar === 'function' && this.$scope.getTabBar()) {
      this.$scope.getTabBar().setData({
        selected: 1
      })
    }
  },
  methods: {},
}
</script>
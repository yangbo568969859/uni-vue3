<template>
  <view class="content">
    Category
  </view>
</template>

<script>
import { getCurrentInstance } from "vue"
// import CustomTabBar from '@/custom-tab-bar/index.vue'
export default {
  // components: {
  //   CustomTabBar
  // },
  data() {
    return {
      title: 'Hello',
    }
  },
  onLoad() {},
  onShow () {
    let { proxy } = getCurrentInstance();
    proxy.$scope.getTabBar().setData({ selected: 1 })
    // console.log('onShow Category', this.$scope.getTabBar)
    // if (typeof this.$scope.getTabBar === 'function' && this.$scope.getTabBar()) {
    //   console.log('Category getTabBar', this.$scope.getTabBar())
    //   this.$scope.getTabBar().setData({
    //     selected: 1
    //   })
    // }
  },
  methods: {},
}
</script>
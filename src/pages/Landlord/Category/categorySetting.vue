<template>
  <view class="category-setting">
    <view class="list">
      <CategoryText label="分类名称" value="我的物业" @changeValue="changeValue" />
      <CategoryNumber label="长租通知" :value="30" @changeValue="changeValue" />
      <CategoryNumber label="短租通知" :value="20" @changeValue="changeValue"/>
    </view>
  </view>
</template>

<script>
import CategoryText from '@/components/Form/CategoryText.vue'
import CategoryNumber from '@/components/Form/CategoryNumber.vue'
export default {
  components: {
    CategoryText,
    CategoryNumber
  },
  data() {
    return {
      formData: {
        longRent: 30,
        shortRent: 20,
      }
    }
  },
  methods: {
    changeValue (props, value) {
      console.log('setting changeValue')
    }
  }
}
</script>

<style lang="scss">
.category-setting {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background: #F4F4F5;

  .list {
    margin-top: 30rpx;
    margin-bottom: 30rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #fff;
  }
}
</style>
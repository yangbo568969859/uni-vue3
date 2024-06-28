<template>
  <view class="cate-item">
    <view class="cate-item-label">{{ label }}</view>
    <view class="cate-item-item">
      <view class="text-value">{{ value }}</view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    label: String,
    value: String,
  },
  data () {
    return {}
  },
  methods: {
    changeValue(type) {
      this.$emit('changeValue')
      if (type === 'minus') {

      } else if (type === 'plus') {

      }
    }
  }
}
</script>

<style lang="scss">
.cate-item {
  width: 100%;
  height: 56px;
  padding: 0 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;

  &-label {
    font-size: 17px;
    color: #000;
    line-height: 20px;
  }

  &-item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .add, .plus {
      width: 32px;
      height: 32px;
      border-radius: 32px;
      font-size: 24px;
      line-height: 32px;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .add {
      background: rgba(0, 0, 0, 0.15);
    }

    .plus {
      background: #CB9F05;
      color: #fff;
    }

    .value {
      width: 60px;
      text-align: center;
    }

    .unit {
      margin-left: 4px;
      width: 40px;
      font-size: 17px;
      line-height: 20px;
      color: #aaa;
    }

    .text-value {
      width: 300rpx;
      text-align: right;
      color: rgba(0, 0, 0, 0.66);
    }
  }
}
</style>
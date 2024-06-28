<template>
  <view class="home">
    <view class="home-top">
      <view class="home-top-main">
        <view class="header" :style="{height: navBarHeight + 'rpx'}">

        </view>
        <view class="real-header" :style="{height: headerHeight + 'rpx', 'padding-left': '30rpx', 'padding-right': '200rpx'}">
          <p>易租</p>
          <view @click="goSelectProperty">选择物业</view>
        </view>
        <view v-if="!hasLogin || !hasProperty" class="user-content">
          <p>{{ !hasLogin ? '登录管理您的物业' : '添加管理您的物业' }}</p>
          <!-- <u-button>立即登录</u-button> -->
          <button
            class="user-content-button"
            size="default"
            type="default"
            style="
              color: #ffffff;
              background-color: #cb9f05;
              border-color: #cb9f05;
            "
            hover-class="is-hover"
            @click="doHandle"
          >
            {{ !hasLogin ? '立即登录' : '立即添加' }}
          </button>
          <p class="tips">
            {{ !hasLogin ? "微信授权登录" : "跳转到 房间车位" }}
          </p>
        </view>
        <view v-else class="content">
          <view class="left">
            <view class="left-item">
              <view class="left-item-title">房屋满租率</view>
              <view class="left-item-main">
                <text>当前</text>
                <text>80%</text>
              </view>
              <view class="left-item-main">
                <text>今年</text>
                <text>80%</text>
              </view>
            </view>
            <view class="left-item">
              <view class="left-item-title">房屋均价</view>
              <view class="left-item-main">
                <text>当前</text>
                <text>2000</text>
              </view>
              <view class="left-item-main">
                <text>今年</text>
                <text>2000</text>
              </view>
            </view>
            <view class="left-item">
              <view class="left-item-title">车位满租率</view>
              <view class="left-item-main">
                <text>当前</text>
                <text>80%</text>
              </view>
              <view class="left-item-main">
                <text>今年</text>
                <text>90%</text>
              </view>
            </view>
            <view class="left-item">
              <view class="left-item-title">车位均价</view>
              <view class="left-item-main">
                <text>当前</text>
                <text>300</text>
              </view>
              <view class="left-item-main">
                <text>今年</text>
                <text>280</text>
              </view>
            </view>
          </view>
          <view class="right"></view>
        </view>
      </view>
    </view>
    <view class="home-search">
      <view class="home-search-main">
        <!-- <image class="icon" src="/static/"></image> -->
        <input class="uni-input" placeholder="搜索房号、车位、租客、电话" />
      </view>
    </view>
    <view class="home-menu">
      <view
        class="home-menu-item"
        v-for="(item, index) in menuList"
        :key="index"
        @click="goMenuItem(item)"
      >
        <image class="icon" :src="item.icon"></image>
        <span class="text">{{ item.text }}</span>
      </view>
    </view>
    <view class="home-ad"></view>
  </view>
</template>

<script>
import { getCurrentInstance } from "vue";
export default {
  data() {
    return {
      title: "Hello",
      selected: 0,
      paddingTopHeight: 0, //苹果X以上手机底部适配高度
      statusBarHeight: 0,
      navBarHeight: 0,
      headerHeight: 0,
      hasLogin: false,
      hasProperty: false,
      menuList: [
        {
          icon: "/static/icons/hardware.png",
          text: "智能管理",
          pagePath: "/pages/Landlord/Workbench/index",
        },
        {
          icon: "/static/icons/supplier.png",
          text: "供应商管理",
          pagePath: "/pages/Landlord/Workbench/index",
        },
        {
          icon: "/static/icons/agreement.png",
          text: "合同模板",
          pagePath: "/pages/Landlord/Workbench/index",
        },
      ],
    };
  },
  created() {
    let that = this;
    uni.getSystemInfo({
      success: function (res) {
        console.log("uni-custom-tabbar", wx.getMenuButtonBoundingClientRect());
        const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
        that.statusBarHeight = res.statusBarHeight;
        that.navBarHeight = res.safeArea.top + menuButtonInfo.top;
        that.headerHeight = menuButtonInfo.height;
        let model = ["X", "XR", "XS", "11", "12", "13", "14", "15"];
        model.forEach((item) => {
          //适配iphoneX以上的底部，给tabbar一定高度的padding-bottom
          if (
            res.model.indexOf(item) != -1 &&
            res.model.indexOf("iPhone") != -1
          ) {
            that.paddingBottomHeight = 40;
          }
        });
      },
    });
  },
  onLoad() {
    // console.log('onLoad', this.$scope.getTabBar)
  },
  onShow() {
    let { proxy } = getCurrentInstance();
    console.log("onShow index", proxy.$scope.getTabBar());
    proxy.$scope.getTabBar().setData({ selected: 0 });
    // if (typeof this.$scope.getTabBar === 'function' && this.$scope.getTabBar()) {
    //   this.$scope.getTabBar().setData({
    //     selected: 0,
    //     paddingBottomHeight: 200
    //   })
    // }
  },
  methods: {
    goMenuItem(item) {
      uni.navigateTo({
        url: item.pagePath,
      });
    },
    doHandle () {
      if (!this.hasLogin) {
        this.hasLogin = true;
        return;
      }
      if (!this.hasProperty) {
        this.hasProperty = true;
        // uni.switchTab({
        //   url: '/pages/Landlord/Workbench/index'
        // })
      }
    },
    goSelectProperty () {
      uni.navigateTo({
        url: '/pages/Landlord/Category/selectCategory'
      })
    },
    onTabItemTap() {},
  },
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.home-top {
  height: 594rpx;
  width: 100%;
  background: #f4f4f5;
}

.real-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.home-top-main {
  height: 574rpx;
  width: 100%;
  background: #f1cd4f;
  border-radius: 0 0 30rpx 30rpx;
  display: flex;
  flex-direction: column;
}

.home-top-main .user-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #3d3d3d;
  font-size: 16px;
}

.home-top-main .content {
  padding: 40rpx;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex: 1;
}

.home-top-main .content .left {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
}

.left-item {
  width: 50%;
  display: flex;
  flex-direction: column;
}

.home-top-main .content .right {
  width: 200rpx;
}

.user-content-button {
  margin-top: 6px;
  margin-bottom: 6px;
}

.home-top-main .user-content .tips {
  color: #AC07FF;
  font-size: 12px;
}

.home-search {
  margin-top: 30rpx;
  height: 80rpx;
  padding: 0 30rpx;
  width: 100%;
  box-sizing: border-box;
}
.home-search-main {
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 66rpx;
  background: #f4f4f5;
}
.home-search-main .uni-input {
  height: 100%;
}

.home-menu {
  margin-top: 30rpx;
  /* padding: 0 30rpx; */
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
}
.home-menu-item {
  width: 150rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.home-menu-item .icon {
  width: 88rpx;
  height: 88rpx;
}
.home-menu-item .text {
  margin-top: 3px;
  font-size: 12px;
  line-height: 16px;
}
</style>

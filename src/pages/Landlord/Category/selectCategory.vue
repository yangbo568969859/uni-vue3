<template>
  <view class="category-select">
    <view class="list">
      <view class="item" v-for="(item) in categoryList" :key="item.id" @click="selectCategory(item.id)">
        <view class="item-left">
          <view class="item-top">
            <text>{{ item.name }}</text>
          </view>
          <view class="item-bottom">
            <view style="margin-right: 10px;">{{ item.house }} 个房间，{{ item.carSpace }} 个车位</view>
            <view class="upcoming">{{ item.upcoming }} 待办，{{ item.empty }} 空置</view>
          </view>
        </view>
        <view class="item-right">
          <view class="selected" v-if="item.id === selectedId">已选</view>
        </view>
      </view>
      <view class="add" @click="addCategory">
        <view style="margin-right: 5px;">+</view>
        <view>添加分类</view>
      </view>
    </view>
  </view>
</template>

<script>
import { getCurrentInstance } from "vue"
export default {
  data() {
    return {
      categoryList: [
        {
          id: 0,
          name: '名城大厦',
          house: 20,
          carSpace: 30,
          upcoming: 0,
          empty: 0,
        },
        {
          id: 1,
          name: '名城大厦',
          house: 20,
          carSpace: 30,
          upcoming: 0,
          empty: 0,
        },
        {
          id: 2,
          name: '名城大厦1',
          house: 20,
          carSpace: 30,
          upcoming: 0,
          empty: 0,
        },
        {
          id: 3,
          name: '名城大厦2',
          house: 20,
          carSpace: 30,
          upcoming: 0,
          empty: 0,
        },
        {
          id: 4,
          name: '名城大厦3',
          house: 20,
          carSpace: 30,
          upcoming: 0,
          empty: 0,
        },
        {
          id: 5,
          name: '名城大厦4',
          house: 20,
          carSpace: 30,
          upcoming: 0,
          empty: 0,
        },
        {
          id: 6,
          name: '名城大厦',
          house: 20,
          carSpace: 30,
          upcoming: 0,
          empty: 0,
        },
        {
          id: 7,
          name: '名城大厦',
          house: 20,
          carSpace: 30,
          upcoming: 0,
          empty: 0,
        },
        {
          id: 8,
          name: '名城大厦',
          house: 20,
          carSpace: 30,
          upcoming: 0,
          empty: 0,
        }
      ],
      selectedId: 0,
    }
  },
  onLoad() {},
  onPullDownRefresh() {
		console.log('refresh');
		setTimeout(function () {
			uni.stopPullDownRefresh();
		}, 1000);
	},
  onShow () {
  },
  methods: {
    addCategory () {
      uni.navigateTo({
        url: '/pages/Landlord/Category/categorySetting'
      })
    },
    selectCategory (id) {
      this.selectedId = id;
    }
  },
}
</script>

<style lang="scss">
.category-select {
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
    
    .add {
      width: 100%;
      height: 160rpx;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 30rpx;
      box-sizing: border-box;
      color: #F1CD4F;
      font-size: 17px;
    }
    .item {
      width: 100%;
      height: 160rpx;
      display: flex;
      flex-direction: row;
      padding: 30rpx;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;

      .item-right {
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;

        .selected {
          padding: 3px 6px;
          background: #F1CD4F;
          color: #fff;
          font-size: 12px;
          border-radius: 3px;
        }
      }
      .item-left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
      }
      .item-bottom {
        display: flex;

        .upcoming {
          color: rgba(0, 0, 0, 0.3);
        }
      }
      .item-top {
        margin-bottom: 5px;
        text {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
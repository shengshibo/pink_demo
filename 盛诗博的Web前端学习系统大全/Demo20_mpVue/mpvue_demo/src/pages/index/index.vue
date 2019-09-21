<template>
  <div class="indexContainer">
    <img class="index_img" :src="userInfo.avatarUrl" v-if="isShow"/>
    <button class="btn" open-type="getUserInfo" @getuserinfo="getUserInfo" v-else>点击获取用户信息</button>
    <p class="userName">hello {{userInfo.nickName}}</p>
    <div @tap="toDetail" class="goStudy">
      <p>开启小程序之旅</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {},
      isShow: false
    }
  },
  beforeMount () {
    console.log('----beforeMount----')
    // 获取用户登录信息
    this.handleGetUserInfo()
  },
  methods: {
    // 获取用户登录信息
    handleGetUserInfo () {
      wx.getUserInfo({
        success: (data) => {
          this.userInfo = data.userInfo
          this.isShow = true
        },
        fail: () => {
          console.log('获取失败')
        }
      })
    },
    getUserInfo (data) {
      // 判断用户是否授权
      if (data.mp.detail.rawData) {
        // 用户授权
        // 获取用户登录信息
        this.handleGetUserInfo()
      }
    },
    toDetail () {
      wx.switchTab({
        url: '/pages/list/main'
      })
    }
  }
}
</script>

<style>
  page {background: #8ed145;}
  .indexContainer {display: flex;flex-direction: column;align-items: center;}
  .index_img {width: 200rpx;height: 200rpx;border-radius: 100rpx;margin: 100rpx 0;}
  .userName {font-size: 40rpx;font-weight: bold;margin: 100rpx 0;}
  .goStudy {width: 220rpx;height: 80rpx;border: 1rpx solid #eee;
    font-size: 24rpx;line-height: 80rpx;text-align: center;border-radius: 10rpx;}
  .btn {width: 300rpx;height: 300rpx;border-radius: 150rpx;margin: 50rpx 0;
    line-height: 300rpx;text-align: center;font-size: 26rpx;}
</style>
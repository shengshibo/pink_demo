// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    isShow: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.myGetUserInfo();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 点击事件
   */
  handleClick() {
    wx.switchTab({
      url: "/pages/list/list"
    })
  },

  /**
   * 获取用户信息
   */
  myGetUserInfo() {
    // 获取用户的当前设置
    wx.getSetting({
      success: (data) => {
        console.log(data);
        if (data.authSetting["scope.userInfo"]) {
          this.setData({
            isShow: false
          });
        }
      }
    }),
    // 获取用户的登录信息
    wx.getUserInfo({
      success: (data) => {
        console.log(data);
        // 更新 data 中的 userInfo
        this.setData({
          userInfo: data.userInfo
        });
      },
      fail: () => {
        console.log("获取用户信息失败!");
      }
    })
  },

  /**
   * 获取用户是否授权
   */
  handleGetUserInfo(data) {
    console.log(data);
    // 判断用户点击的是否是允许
    if (data.detail.rawData) {
      // 用户点击的是允许
      this.myGetUserInfo();
    }
  }
})
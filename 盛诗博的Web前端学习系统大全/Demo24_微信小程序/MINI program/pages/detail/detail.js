// pages/detail/detail.js
let datas = require("../../datas/list-data.js");
let appDatas = getApp();
console.log(appDatas, typeof appDatas);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj: {},
    index: null,
    isCollected: false,
    isMusic: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    // 获取参数值
    let index = options.index;
    // 更新 data 中 detailObj 的状态值
    this.setData({
      detailObj: datas.list_data[index],
      index // 用一个属性可以省略不写
    });
    // 根据本地缓存数据 判断用户是否收藏了当前文章
    let detailStorage = wx.getStorageSync("isCollected");
    console.log(detailStorage);
    if (!detailStorage) {
      // 在缓存中初始化空对象
      wx.setStorageSync("isCollected", {});
    }
    // 判断用户是否收藏
    if (detailStorage[index]){ // 收藏
      this.setData({
        isCollected: true
      });
    }
    // 判断音乐是否在播放
    if (appDatas.data.isPlay && appDatas.data.pageIndex === index) {
      // 修改 isMusic 状态值
      this.setData({
        isMusic: true
      });
    }
    // 监听音乐播放
    wx.onBackgroundAudioPlay(() => {
      // 修改 isMusic 状态值
      this.setData({
        isMusic: true
      });
      // 修改 appDatas 中的数据
      appDatas.data.isPlay = true;
      appDatas.data.pageIndex = index;
    });
    // 监听音乐暂停
    wx.onBackgroundAudioPause(() => {
      // 修改 isMusic 状态值
      this.setData({
        isMusic: false
      });
      // 修改 appDatas 中的数据
      appDatas.data.isPlay = false;
    });
  },
  handleCollection(){
    console.log(this);
    let isCollected = !this.data.isCollected;
    // 更新状态
    this.setData({
      isCollected
    });
    // 提醒用户
    let title = isCollected?"收藏成功":"取消收藏";
    wx.showToast({
      title,
      icon: "success"
    });
    // 缓存数据到本地
    // {1: true, 2: false}
    let {index} = this.data;
    // 不可行，会覆盖之前的状态
    // let obj = {}; // {0: true, 2: true}
    wx.getStorage({
      key: "isCollected",
      success: (datas) => {
        console.log("成功",datas);
        let obj = datas.data;
        obj[index] = isCollected;
        wx.setStorage({
          key: "isCollected",
          data: obj,
          success: () => {
            console.log("缓存成功");
          }
        });
      }
    });
  },
  // 处理音乐播放
  handleMusicPlay(){
    let isMusic = !this.data.isMusic;
    this.setData({
      isMusic
    });
    // 控制音乐播放
    if (isMusic) {
      // 播放音乐
      let { dataUrl, title } = this.data.detailObj.music;
      wx.playBackgroundAudio({
        dataUrl,
        title
      })
    } else {
      // 暂停音乐
      wx.pauseBackgroundAudio();
    }
  },
  // 分享功能
  handleShare() {
    wx.showActionSheet({
      itemList: [
        "分享给好友",
        "分享到朋友圈",
        "分享到微博"
      ]
    })
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

  }
})
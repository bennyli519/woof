// pages/Play/play.js
let app = getApp();
Page({


  data: {
    playerData: "",//玩家数据
    isShowRole: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      playerData: app.globalData
    })
    console.log(this.data.playerData)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  startViewRole() {
    this.setData({
      isShowRole: !this.data.isShowRole
    })
  },
  endViewRole() {
    this.setData({
      isShowRole: !this.data.isShowRole
    })
  },
  clickPlayer(e) {
    console.log(e)

  }


})
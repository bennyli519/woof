//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isTaken: false,
    playData: "",//游戏数据
    currentIndex: 0,//当前玩家index
    currentPhoto: "",//当前玩家图片
    currentName: "",//当前玩家名字
    userData: [],
  },
  //拍照
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          isTaken: true
        })
        this.setData({
          currentPhoto: res.tempImagePath
        })
      }

    })
  },
  //下一位玩家拍照
  nextPlayer() {
    this.data.userData.push({
      playerPic: this.data.currentPhoto,
      UserName: this.data.currentName
    });
    this.setData({
      playData: this.data.playData,
      currentIndex: this.data.currentIndex + 1,
      currentPhoto: "",
      currentName: "",
      isTaken: false
    })

    //拍照完毕
    if (this.data.currentIndex == this.data.playData.CurrentList.length) {

      this.data.playData.userData = this.data.userData;

      app.globalData = this.data.playData;
      wx.navigateTo({
        url: '/pages/Begin/begin'
      })
    }
  },

  onLoad: function (options) {
    this.setData({
      playData: app.globalData
    })
    // console.log(this.data.playData)
  },
  inpName(e) {
    this.setData({
      currentName: e.detail.value
    })
  },
  onShow() {

  }
})

//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    isTaken:false,
  },
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          isTaken:true
        })
        console.log(this.data.isTaken)
        this.setData({
          src: res.tempImagePath
        })
        console.log(this.data.src)
      }
    })
  },
  error(e) {
    console.log(e.detail)
  }
})

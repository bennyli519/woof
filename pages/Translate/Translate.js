// pages/Mode/mode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    translateWord:'',//需要翻译的值
    translateRes:{},//翻译结果
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

  },
  // 输入单词改变
  inputTranslate(e){
    this.setData({
      translateWord: e.detail.value
    })
  },
  // 翻译
  translate(){
    var self = this;
    if(self.data.translateWord === ''){
      return
    }
    if(self.data.translateWord === 'open lrs'){
      wx.navigateTo({
        url: '/pages/Home/home'
      })
      return
    }
    wx.request({
      url: 'https://fanyi.youdao.com/translate',
      method: 'GET',
      data: {
        doctype: 'json',
        type: 'AUTO',
        i: self.data.translateWord
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        self.setData({
          translateWord: '',
          translateRes: res.data.translateResult[0][0]
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

})
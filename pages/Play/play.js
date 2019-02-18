// pages/Play/play.js
let app = getApp();
Page({


  data: {
    playerData: "",//玩家数据
    isShowRole: false,
    userOption: [],
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
    this.data.playerData.CurrentList.forEach(e => {
      this.data.userOption.push({
        isShowOptions: false, //是否展示选项
        isOver: false, //玩家游戏是否结束
        isShowRole: false,//是否显示该玩家身份
        RoleType: e.RoleType,//角色类型
      })
    });

    this.setData({
      userOption: this.data.userOption
    })
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
  // 选择该玩家
  clickPlayer(e) {
    this.data.userOption[e.currentTarget.dataset.index].isShowOptions = true;
    this.setData({
      userOption: this.data.userOption
    })
    console.log(this.data.userOption)
  },
  //结束该玩家
  userOver(e) {
    this.data.userOption[e.currentTarget.dataset.index].isShowOptions = false;
    this.data.userOption[e.currentTarget.dataset.index].isOver = true;
    this.setData({
      userOption: this.data.userOption
    })
    this.getGameStatus(); //游戏是否结束
  },
  //查看该玩家身份
  showRole(e) {
    this.data.userOption[e.currentTarget.dataset.index].isShowOptions = false;
    this.data.userOption[e.currentTarget.dataset.index].isShowRole = true;
    this.setData({
      userOption: this.data.userOption
    })
  },
  //返回
  return(e) {
    this.data.userOption[e.currentTarget.dataset.index].isShowRole = false;
    this.setData({
      userOption: this.data.userOption
    })
  },
  //取消
  cancel(e) {
    this.data.userOption[e.currentTarget.dataset.index].isShowOptions = false;
    this.setData({
      userOption: this.data.userOption
    })
  },
  //游戏是否结束
  getGameStatus() {
    var m = 0; //民
    var s = 0; //神
    var l = 0; //狼
    this.data.userOption.forEach(e => {
      //统计仍在游戏中的 民/神/狼
      if (!e.isOver)
        if (e.RoleType == 0) {
          m += 1;
        } else if (e.RoleType == 1) {
          l += 1;
        } else {
          s += 1;
        }
    })

    if (m == 0 || s == 0) {
      wx.showModal({
        content: '游戏结束，狼队获胜！',
        showCancel: false,
        confirmText: "重新开始",
        success: function (res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '/pages/Home/home'
            })
          }
        }
      });
    }

    if (l == 0) {
      wx.showModal({
        content: '游戏结束，好人获胜！',
        showCancel: false,
        confirmText: "重新开始",
        success: function (res) {
          wx.navigateTo({
            url: '/pages/Home/home'
          })
        }
      });
    }


  }

})
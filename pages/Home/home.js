// pages/Home/home.js
let app = getApp();
const { $Message } = require('../../dist/base/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
      roleList:app.globalData.RoleList,//所有角色列表
      player:app.globalData.player, //玩家人数
      selectPlayer:0,//已分配玩家人数
  },

  //玩家数量改变
  handleChange ({ detail }) {
      this.setData({
        player: detail.value
      })
  },
  //角色数量改变
  normalChange (detail){
    this.data.roleList[detail.target.dataset.index].Num = detail.detail.value;
    if(this.getRoleNum() > this.data.player){
      $Message({
          content: '已达到最大玩家人数',
          type: 'error'
      });
      this.data.roleList[detail.target.dataset.index].Num = detail.detail.value-1;
      this.setData({
        selectPlayer:this.data.player
      })
    }
    this.setData({
      roleList:this.data.roleList,
    })
  },
  //获取已分配的角色数量
  getRoleNum(){
    let roles = 0;
    this.data.roleList.forEach(e => {
      roles += e.Num;
    });
    this.setData({
      selectPlayer:roles
    })
    return roles;
  },
  //开始发牌
  playGame(){
    let playsArr=[];
    this.data.roleList.forEach(e=>{
      if(e.Num != 0){
        let i = e.Num;
        while(i){
          playsArr.push(e)
          i-=1;
        }
      }
    });
    playsArr.forEach((e)=>{
      e.UserName="";
      e.playerPic="";
    })
    //保存配置至全局
    app.globalData.CurrentList = app.randomRole(playsArr);
    app.globalData.RoleList = this.data.roleList;
    app.globalData.player = this.data.player;
    wx.navigateTo({
      url:'/pages/Shoot/shoot'
    })
  },  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getRoleNum();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  
  onShow: function () {

  },

})
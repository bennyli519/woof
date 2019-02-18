//app.js
App({
  onLaunch: function () {

  },
  globalData: {
    //角色列表 //身份类型(0=>民 1=>狼  2=>神)
    RoleList: [
      {
        RoleId: 1001,
        RoleName: '平民',
        RoleType: 0,
        Photo: '../../resources/images/role/pm.jpg',
        Num: 3,
      },
      {
        RoleId: 1002,
        RoleName: '狼人',
        RoleType: 1,
        Photo: '../../resources/images/role/langren.jpg',
        Num: 3,
      },
      {
        RoleId: 1003,
        RoleName: '预言家',
        RoleType: 2,
        Photo: '../../resources/images/role/yyj.jpg',
        Num: 1,
      },
      {
        RoleId: 1004,
        RoleName: '女巫',
        RoleType: 2,
        Photo: '../../resources/images/role/nw.jpg',
        Num: 1,
      },
      {
        RoleId: 1005,
        RoleName: '守卫',
        RoleType: 2,
        Photo: '../../resources/images/role/sw.jpg',
        Num: 1,
      },
      {
        RoleId: 1006,
        RoleName: '猎人',
        RoleType: 2,
        Photo: '../../resources/images/role/lieren.jpg',
        Num: 0,
      },
      {
        RoleId: 1007,
        RoleName: '白痴',
        RoleType: 2,
        Photo: '../../resources/images/role/bc.jpg',
        Num: 0,
      },

    ],
    //玩家列表
    CurrentList: [],
    player: 9, //默认玩家人数
    userData: [],
  },
  //随机分配身份
  randomRole(arr) {
    let i = arr.length, t, j;
    while (i) {
      j = Math.floor(Math.random() * i--);
      t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
    }
    return arr;
  }

})
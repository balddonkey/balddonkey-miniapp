//index.js
//获取应用实例
var util = require('../../utils/util.js')

var app = getApp()

let avatarRadiu = 32;
let nicknameRadiu = 60;
let signRadiu = 44;
let userHeight = 290;

let initialData = {
  detail: {
    sign: 'iOS开发者',
    motto: '啊 舍不得璀灿俗世 啊 躲不开痴恋的欣慰 啊 找不到色相代替 啊 参一生参不透这条难题'
  },
  head: {
    top: '160rpx'
  },
  head_motto: {
    alpha: 1
  },
  head_avatar: {
    avatarLeft: '50%',
    nicknameLeft: '50%',
    signLeft: '50%',
    nicknameTop: '170rpx',
    signTop: '240rpx',
    userHeight: '290rpx'
  }
}

Page({
  data: {
    motto: 'Hello World1111111',
    userInfo: {},
    detail: {},
    windowWidth: null,
    windowHeight: '1000px',
    head: initialData.head,
    head_avatar: initialData.head_avatar,
    head_motto: initialData.head_motto
  },
  gradient: function (value) {
    var that = this;
    var avatarAnimation = wx.createAnimation({
      duration: 1,
      timingFunction: 'liner'
    })
    let top = 160 - value;
    console.log('原始top: ' + top);
    top = Math.max(-1, top);
    
    // 用户信息顶部距离
    let topStr = top + "rpx";

    // 签名透明度
    let alpha = top / 160;

    // avatar left; 10 为左padding
    let avatarLeft = (this.data.windowWidth / 2 - 32 - 20) * alpha + 32 + 20;
    avatarLeft = Math.min(avatarLeft, this.data.windowWidth / 2);

    // nickname top
    let nicknameTop = 140 * alpha + 30;
    nicknameTop = Math.min(170, nicknameTop);
    console.log('nickname top: ' + nicknameTop);

    // sign top
    let signTop = nicknameTop + 70;

    // user height
    let userHeight = (290 - 128 - 20 * 2) * alpha + 128 + 20 * 2 + 2;
    userHeight = Math.min(userHeight, 290);

    // 出发状态变化
    that.setData({
      head: {
        top: topStr,
        mottoAlpha: alpha
      },
      head_motto: {
        alpha: alpha
      },
      head_avatar: {
        avatarLeft: avatarLeft + 'px',
        nicknameTop: nicknameTop + 'rpx',
        signTop: signTop + 'rpx',
        userHeight: userHeight + 'rpx'
      }
    })
  },
  //事件处理函数
  bindtouchmove: function (value) {
    // console.log('value: ' + JSON.stringify(value));
    this.gradient(value.detail.scrollTop);
  },
  onLoad: function () {
    console.log('onLoad')
    console.log('a: ' + JSON.stringify(document));
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据

      let res = util.getSystemInfo();
      that.setData({
        userInfo: userInfo,
        detail: initialData.detail,
        windowHeight: res.windowHeight ? (res.windowHeight + 'px') : ('1000px'),
        windowWidth: res.windowWidth
      })
    })
  }
})

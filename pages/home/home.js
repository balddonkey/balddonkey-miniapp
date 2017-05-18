//index.js
//获取应用实例
var app = getApp()

let initialData = {
  detail: {
    sign: 'iOS开发者',
    motto: '啊 舍不得璀灿俗世 啊 躲不开痴恋的欣慰 啊 找不到色相代替 啊 参一生参不透这条难题'
  }
}

Page({
  data: {
    motto: 'Hello World1111111',
    userInfo: {},
    detail: {},
    avatarAnimation: null
  },
  //事件处理函数
  bindtouchmove: function (value) {
    console.log('value: ' + JSON.stringify(value));
  },
  onLoad: function () {
    console.log('onLoad')
    console.log('a: ' + JSON.stringify(document));
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo,
        detail: initialData.detail
      })

      var avatarAnimation = wx.createAnimation({
        duration: 2000,
        timingFunction: 'liner'
      })
      avatarAnimation.left("84rpx").step();
      that.setData({
        avatarAnimation: avatarAnimation
      })
    })
  }
})

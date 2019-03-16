//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '登你妈的录',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    auth: true
  },
  //事件处理函数

  showok: function () {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },

  modalcnt: function () {
    wx.showModal({
      title: '提示',
      content: '请确认您的权限',
      success: function (res) {
        if (res.confirm) {
          console.log('确定')
          auth: true
          console.log(auth)
        } else if (res.cancel) {
          console.log('取消')
        }
      }
    })
  },


  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  toMain: function () {
    wx.switchTab({
      url: '../main/main'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    var that = this
    if (!that.data.auth){
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })

    wx.showToast({
      title: '失败，无权限',
      icon: 'loading',
      duration: 2000
    })
  }

    else if (that.data.auth) {
      console.log(e)
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })

      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000
      })
    }

    

  }
})

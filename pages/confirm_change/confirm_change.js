// pages/confirm_change/confirm_change.js
Page({

  /**
   * Page initial data
   */
  data: {
    ori_date:'02/02/2019',
    mod_date:'02/03/2019'
  },

  formSubmit:function(e){
    
  },
  payment:function(){
    wx.navigateTo({
      url: '/pages/payment_change/payment_change?date=02/03/2019'
    })
  },
  home: function () {
    wx.navigateTo({
      url: "/pages/main/main"
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})
var app = getApp();
var getinfo = app.globalData.assignedDate;

Page({
  data: {
    dates: '2016-11-08',
    times: '12:00',
    objectArray: ['教室0', '教室1', '教室2'],
    index: 0,
  },
  toHome: function () {
    wx.switchTab({
      url: '../main/main'
    })

  },
  //  点击时间组件确定事件  
  bindTimeChange: function (e) {
    this.setData({
      times: e.detail.value
    })
    app.globalData.assignedTime = e.detail.value
    console.log(app.globalData.assignedTime);
  },

  //  点击日期组件确定事件  
  bindDateChange: function (e) {

    console.log(e.detail.value)
    this.setData({
      dates: e.detail.value
    })
    app.globalData.assignedDate = e.detail.value
    console.log(app.globalData.assignedDate);
  },
  //  点击城市组件确定事件  
  bindPickerChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      index: e.detail.value
    })
    app.globalData.assignedRoom = e.detail.value
    console.log(app.globalData.assignedRoom);
  }
})
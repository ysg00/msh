var app = getApp();

Page({
  data: {
    dates: '2016-11-08',
    times: '12:00',
    objectArray: ['教室0', '教室1', '教室2'],
    index: 0,
    dateinfo: '无信息',
    roominfo: '无信息',
    timeinfo: '无信息'
  },
  toHome: function () {
    wx.switchTab({
      url: '../main/main'
    })
    console.log(app.globalData.assignedDate)

  },
  getinfomation: function () {
    this.setData({
      dateinfo : app.globalData.assignedDate,
      roominfo: app.globalData.assignedRoom,
      timeinfo: app.globalData.assignedTime

    })
    console.log(app.globalData.assignedDate)

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
Component({
  data: {
    selected: 0,
    color: "#eee",
    selectedColor: "#F1CD4F",
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "/static/tabbar/work.png",
      selectedIconPath: "/static/tabbar/work_active.png",
      text: "易租"
    }, {
      pagePath: "/pages/Landlord/Category/index",
      iconPath: "/static/tabbar/moneyflow.png",
      selectedIconPath: "/static/tabbar/moneyflow_active.png",
      text: "流水"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})
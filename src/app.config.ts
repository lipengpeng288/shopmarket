export default {
  pages: ['pages/serviceCenter/index', 'pages/find/index', 'pages/my/index'],
  window: {
    backgroundColor: '#fff',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  subpackages: [
    {
      root: 'pagesSub/search',
      pages: ['index']
    },
    {
      root: 'pagesSub/my',
      pages: ['detail/index', 'about/index']
    },
    {
      root: 'pagesSub/book',
      pages: ['detail/index']
    }
  ],
  tabBar: {
    color: '#7A7E83',
    selectedColor: '#d81e06',
    borderStyle: 'black',
    backgroundColor: '#fff',
    list: [
      {
        pagePath: 'pages/serviceCenter/index',
        iconPath: 'assets/icons/user_default.png',
        selectedIconPath: 'assets/icons/user_selected.png',
        text: '首页'
      },
      {
        pagePath: 'pages/find/index',
        iconPath: 'assets/icons/user_default.png',
        selectedIconPath: 'assets/icons/user_selected.png',
        text: '发现'
      },
      {
        pagePath: 'pages/my/index',
        iconPath: 'assets/icons/user_default.png',
        selectedIconPath: 'assets/icons/user_selected.png',
        text: '我的'
      }
    ]
  }
}

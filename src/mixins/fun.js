import wepy from 'wepy'

export default class funMixin extends wepy.mixin {
  data = {
    mixin: 'This is mixin data.'
  }
  goTop () {  // 一键回到顶部
    if (wepy.pageScrollTo) {
      wepy.pageScrollTo({
        scrollTop: 0,
        duration: 300
      })
    } else {
      wepy.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  }
  
  onShow() {
    // console.log('mixin onShow')
  }

  onLoad() {
    // console.log('mixin onLoad')
  }
}
export let verifyMobile = {
  /**
   * 是否是安卓设备
   * @returns {boolean}
   */
  verifyAndroid: function () {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    if (isAndroid) {
      return true;
    } else {
      return false;
    }
  },
  /**
   *是否是ios设备
   * @returns {boolean}
   */
  verifyIos: function () {
    var u = navigator.userAgent;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isiOS) {
      return true;
    } else {
      return false;
    }
  },
  /**
   * 是否是微信内部浏览器
   * @returns {boolean}
   */
  isWeiXin: function () {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger" || ua.match(/WeiBo/i) == "weibo") {
      return true;
    } else if (ua.indexOf('mobile mqqbrowser') > -1) {
      return true;
    } else if (ua.indexOf('iphone') > -1 || ua.indexOf('mac') > -1) {
      if (ua.indexOf('qq') > -1) {
        return true;
      }
    }
    return false;
  }

}
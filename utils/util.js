
function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function gradient(size, value) {
  if (size > 0)
    return value / size;
  else 
    return 0;
}

// 获取屏幕分辨率
let systemInfo = null;
function getSystemInfo() {
  if (systemInfo !== null) {
    return systemInfo;
  }
  let res;
  try {
    res = wx.getSystemInfoSync();
  }
  catch(e){
    return null;
  }
  systemInfo = res;
  return systemInfo;
}

module.exports = {
  formatTime: formatTime,
  gradient: gradient,
  getSystemInfo: getSystemInfo
}
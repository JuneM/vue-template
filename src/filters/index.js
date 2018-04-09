/**
 * 根据给定格式，格式化时间戳
 * @param millSeconds
 * @param fmt 格式 ‘yyyy.MM.dd hh:mm’ || 'yyyy-MM-dd' || 其他
 * @returns
 */
function formateDate(millSeconds, fmt) {
  if (!millSeconds) return '' // 如果时间为空，则返回空
  if (typeof millSeconds === 'string') { // 如果时间传入为字符串，则转换成十进制
    millSeconds = parseInt(millSeconds, 10)
  }
  if (!fmt) {
    fmt = 'yyyy-MM-dd hh:mm:ss' // 若用户没有传入指定格式，则使用默认格式转换时间
  }
  const date = new Date(millSeconds) // 时间戳转换城日期对象
  const options = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length))
  }
  Object.keys(options).forEach((key) => {
    if (new RegExp(`(${key})`).test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (options[key]) : ((`00${options[key]}`).substr((`${options[key]}`).length)))
    }
  })
  return fmt
}

export {
  formateDate
}

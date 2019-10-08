/**
 * 包含n个工具函数的模块
 */
/**
 * 用户主界面路由
 *   dashen：/dashen
 *   laoban：/laoban
 * 用户信息完善界面路由
 *   dashen：/dasheninfo
 *   laoban：/laobaninfo
 * 判断是否已经完善信息？user.header是否有值
 * 判断用户类型：user.type
 */
export const getRedirectTo = function (type, header) {
  if (type === 'laoban') {
    if (header) return '/laoban'
    return '/laobaninfo'
  } else {
    if (header) return '/dashen'
    return '/dasheninfo'
  }
}

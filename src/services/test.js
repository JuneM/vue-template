import xhr from './xhr'

export default {
  /**
   * 获取数据
   */
  getData: xhr.get.bind(null, '/x/x') 
}
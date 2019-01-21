// 引入请求
import axios from '@/libs/api.request'

// 获取表格数据为例
export const getTableData = () => {
  return axios.request({ // 这里返回的是一个Promise，request方法传入一个配置对象，配置项可参考axios
    url: 'get_table_data',
    method: 'get'
  })
}
/**
 * 在使用的地方如下：
    import { getTableData } from '@/api/data'

   getTableData().then(res => {
    this.tableData = res.data
  }).catch(err => {
    console.log(err)
  })
 *
 */

export const getDragList = () => {
  return axios.request({
    url: 'get_drag_list',
    method: 'get'
  })
}

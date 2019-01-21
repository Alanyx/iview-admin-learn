import Mock from 'mockjs'
// 将login相关的处理回调引入
import { login, logout, getUserInfo } from './login'
import { getTableData, getDragList } from './data'

/**
 * 登录相关和获取用户信息
 */
// 配置拦截匹配规则和处理回调
Mock.mock(/\/login/, login)
Mock.mock(/\/get_info/, getUserInfo)
Mock.mock(/\/logout/, logout)
Mock.mock(/\/get_table_data/, getTableData)
Mock.mock(/\/get_drag_list/, getDragList)

export default Mock

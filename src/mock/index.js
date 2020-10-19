import Mock from 'mockjs'
import homeApi from './home'
import userApi from './user'

// 为模拟请求返回数据效果，设置200-2000毫秒延时请求数据
Mock.setup({
    timeout: '200-2000'
})

/* Mock.mock(rurl, rtype, template)，三个参数分别是：需要拦截的url（字符串或正则）、拦截的请求类型，数据模板 */
// 首页相关
Mock.mock(/\/home\/getData/, 'get', homeApi.getStatisticalData)

// 用户相关
Mock.mock(/\/user\/getUser/, 'get', userApi.getUserList)
Mock.mock(/\/user\/del/, 'get', userApi.deletUser)
Mock.mock(/\/user\/batchremove/, 'get', userApi.batchremove)
Mock.mock(/\/user\/add/, 'post', userApi.createUser)
Mock.mock(/\/user\/edit/, 'post', userApi.updateUser)
Mock.mock(/\/home\/getData/, 'get', homeApi.getStatisticalData)
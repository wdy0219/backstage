import axios from 'axios'

// 创建一个axios实例
const service = axios.create({
    // 请求超时时间
    timeout: 3000
})

// 添加请求拦截器，一般是请求前给请求头加个token传给后端，不用在每个要请求的地方都写token，相当于一个公共部分
service.interceptors.request.use(
    config => {
        return config
    },
    err => {
        console.log(err);
    }
)

service.interceptors.response.use(
    response => {
        let res = {}
        res.status = response.status  // 利用后端返回，做些token跳转、刷新页面  
        res.data = response.data
        return res
    },
    err => console.log(err)
)

export default service